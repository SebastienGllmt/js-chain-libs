import React from 'react';

import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

import { EmptyResult } from '../../Commons';
import { TransactionTable } from '../../Transaction';
import BlockInfo from '../BlockInfo/BlockInfo';

const FullBlockInfo = ({ block }) => {
  if (!block) {
    return <EmptyResult {...{ entityName: 'Block' }} />;
  }
  const { transactions } = block;

  return (
    <div className="entityInfoContainer">
      <BlockInfo {...{ block }} />
      <TransactionTable {...{ transactions }} />
    </div>
  );
};

export default createFragmentContainer(FullBlockInfo, {
  block: graphql`
    fragment FullBlockInfo_block on Block {
      ...BlockInfo_block
      transactions {
        ...TransactionTable_transactions
      }
    }
  `
});
