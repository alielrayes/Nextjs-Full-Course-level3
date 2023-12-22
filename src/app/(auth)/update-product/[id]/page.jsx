import Header from 'components/header/header';
import React from 'react';
import UpdateForm from './updateForm';

const Page = ({params}) => {
  return (
    <>
      <Header isAdminPage={false} />
      <main className="px-3">
      <UpdateForm productId={params.id} />
      </main>
    </>
  );
}

export default Page;
