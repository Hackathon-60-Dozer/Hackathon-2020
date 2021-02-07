const admin = require('firebase-admin');
const serviceAccount = require('./src/config/firebase-credential.json');

const [uid = null, ...args] = process.argv.slice(2);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

if (uid) {
  admin
    .auth()
    .getUser(uid)
    .then((user) => {
      if (user) {
        const claims = {
          ...user.customClaims,
          admin: !(args.includes('--remove') || args.includes('-r')),
        };

        admin
          .auth()
          .setCustomUserClaims(uid, claims)
          .then(() => {
            console.log(
              `User updated. ${user.displayName}'s <${user.email}> claims or now:`
            );
            console.dir(claims);
            process.exit(0);
            return true;
          })
          .catch((e) => {
            process.exitCode = 1;
            throw e;
          });
      } else {
        console.error('User does not exist');
        process.exitCode = 1;
      }
    })
    .catch((e) => {
      process.exitCode = 1;
      throw e;
    });
} else {
  console.error(`Error: You must enter a unique id`);
  process.exitCode = 1;
}
