import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useAuth } from '@hook/useAuth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faMapMarkerAlt,
  faStore,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import dynamic from 'next/dynamic';
import { Address } from '@types';

const AddressField = dynamic(() => import('./Field/Address'), {
  ssr: false,
});

type FormData = {
  collectPointType: 'market' | 'shop';
  orgName: string;
  shopName: string;
  siret: string;
  address: string;
  siegeAddress: string;
  ownerName: string;
  ownerLastName: string;
  labels: string[];
};

const schema = yup.object().shape({
  // collectPointType: yup.string().required('Ce champ est obligatoire'),
  orgName: yup.string().required('Ce champ est obligatoire'),
  shopName: yup.string().required('Ce champ est obligatoire'),
  siret: yup
    .string()
    .required('Ce champ est obligatoire')
    .test(
      'valid-siret',
      'Veuillez entrer un SIRET valide.',
      function (value: string) {
        function verify(number: string, size: number) {
          if (isNaN((number as unknown) as number) || number.length !== size) {
            return false;
          }
          let bal = 0;
          let total = 0;
          for (let i = size - 1; i >= 0; i--) {
            const step = (number.charCodeAt(i) - 48) * (bal + 1);
            /*if (step>9) { step -= 9; }
             total += step;*/
            total += step > 9 ? step - 9 : step;
            bal = 1 - bal;
          }
          return total % 10 === 0;
        }

        return verify(value.trim().split(' ').join(''), 14);
      }
    ),
  address: yup.string().required('Ce champ est obligatoire'),
  siegeAddress: yup.string().required('Ce champ est obligatoire'),
  ownerName: yup.string().required('Ce champ est obligatoire'),
  ownerLastName: yup.string().required('Ce champ est obligatoire'),
  labels: yup.array(),
});

export const AddShopForm: React.FC = () => {
  const router = useRouter();
  const { session, account } = useAuth();
  const [error, setFormError] = useState();

  const [address, setAddress] = useState({});
  const { register, handleSubmit, errors, setError } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      ownerName: account?.firstName || '',
      ownerLastName: account?.lastName || '',
    },
  });

  const handleAddressChange = useCallback(
    (e: any, name: string) => {
      // @ts-ignore
      const address: Address & Record<string, any> = e.suggestion;

      console.log(address);

      if (address.type !== 'address') {
        setError(name, {
          message: 'Veuillez entrer une adresse complète.',
        });
      }

      setAddress((prevState) => ({
        ...prevState,
        [name]: address,
      }));
    },
    [setError]
  );

  useEffect(() => {
    // if (!session) {
    //   router.push(routes.signIn.url);
    // }
  }, [router, session]);

  const onSubmit = useCallback(
    (values: FormData) => {
      console.log({ values, address });
    },
    [address]
  );

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              placeholder={'Nom de la société'}
              name={'orgName'}
              id={'orgName'}
              type={'text'}
              color={'secondary'}
              error={errors.orgName && !!errors.orgName.message}
              helperText={errors?.orgName?.message}
              inputRef={register}
              autoComplete={'organization'}
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faBuilding} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder={'Nom de la boutique'}
              name={'shopName'}
              id={'shopName'}
              type={'text'}
              color={'secondary'}
              autoComplete={'organization'}
              error={errors.shopName && !!errors.shopName.message}
              helperText={errors?.shopName?.message}
              inputRef={register}
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faStore} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder={'SIRET de la boutique'}
              name={'siret'}
              id={'siret'}
              type={'text'}
              color={'secondary'}
              autoComplete={'off'}
              error={errors.siret && !!errors.siret.message}
              helperText={errors?.siret?.message}
              inputRef={register}
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faStore} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <AddressField
              placeholder={'Adresse de la boutique'}
              name={'address'}
              id={'address'}
              type={'text'}
              color={'secondary'}
              onAddressChange={handleAddressChange}
              error={errors.address && !!errors.address.message}
              helperText={errors?.address?.message}
              inputRef={register}
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <AddressField
              placeholder={'Adresse du siège de la société'}
              name={'siegeAddress'}
              id={'siegeAddress'}
              type={'text'}
              color={'secondary'}
              inputMode={'text'}
              onAddressChange={handleAddressChange}
              aria-autocomplete={'none'}
              error={errors.siegeAddress && !!errors.siegeAddress.message}
              helperText={errors?.siegeAddress?.message}
              inputRef={register}
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder={'Nom'}
              name={'ownerName'}
              id={'ownerName'}
              type={'text'}
              color={'secondary'}
              autoComplete={'given-name'}
              error={errors.ownerName && !!errors.ownerName.message}
              helperText={errors?.ownerName?.message}
              inputRef={register}
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faUserCircle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              placeholder={'Prénom'}
              name={'ownerLastName'}
              id={'ownerLastName'}
              type={'text'}
              color={'secondary'}
              autoComplete={'family-name'}
              error={errors.ownerLastName && !!errors.ownerLastName.message}
              helperText={errors?.ownerLastName?.message}
              inputRef={register}
              fullWidth
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FontAwesomeIcon icon={faUserCircle} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          {/*<Grid item xs={12}>*/}
          {/*  <label></label>*/}
          {/*</Grid>*/}
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            {error && (
              <Typography variant={'body2'} color={'error'}>
                {error}
              </Typography>
            )}
            <Button
              disabled={Object.keys(errors).length > 0}
              type={'submit'}
              variant={'outlined'}
              color={'primary'}>
              Créer
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddShopForm;
