import { TextField, TextFieldProps } from '@material-ui/core';
import React, { useEffect, useMemo } from 'react';
import places from 'places.js';

export type AddressFieldProps = {
  onAddressChange?: (e: any, name: string) => void;
} & TextFieldProps;

const AddressField: React.FC<AddressFieldProps> = ({ ...props }) => {
  const { id, name, onAddressChange } = props;

  useEffect(() => {
    const placesAutocomplete = places({
      appId: process.env.NEXT_PUBLIC_PLACES_APP_ID,
      apiKey: process.env.NEXT_PUBLIC_PLACES_API_KEY,
      container: document.getElementById(id),
      language: 'fr',
      useDeviceLocation: true,
    });

    console.log(placesAutocomplete);

    placesAutocomplete.on('change', function (e) {
      return onAddressChange(e, name);
    });

    return () => {
      placesAutocomplete.removeAllListeners('change');
    };
  }, [id, name, onAddressChange]);

  return (
    <TextField
      autoComplete={'off'}
      inputProps={{
        autocomplete: 'off',
        form: {
          autocomplete: 'off',
        },
      }}
      {...props}
    />
  );
};

export default AddressField;
