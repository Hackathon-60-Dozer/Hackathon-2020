import {
  InstantSearch,
  Hits,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  connectSearchBox,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { InputAdornment, TextField, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_AP8_KEY
);

// 1. Create a React component
const SearchBox = () => (
  <TextField type={'text'} variant={'outlined'} color={'secondary'} fullWidth />
);

// 2. Connect the component using the connector
const MUISearchBox = connectSearchBox(SearchBox);

const AlgoliaSearch: React.FC<{ title: string }> = ({ title }) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="dev_NAME">
      <div className="left-panel">
        {/*<ClearRefinements />*/}
        <Typography variant={'h2'} color={'secondary'}>
          {title}
        </Typography>
        <RefinementList attribute="consumption" />
        <Configure hitsPerPage={8} />
      </div>
      <div className="right-panel">
        <MUISearchBox />
        <Hits hitComponent={Hit} />
        <Pagination />
      </div>
    </InstantSearch>
  );
};

function Hit(props) {
  return (
    <div>
      <img src={props.hit.image} alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">${props.hit.price}</div>
    </div>
  );
}

export default AlgoliaSearch;
