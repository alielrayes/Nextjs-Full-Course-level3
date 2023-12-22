import Header from 'components/header/header';
import React from 'react';
import UpdateForm from './updateForm';

const Page = () => {
  return (
    <>
      <Header isAdminPage={false} />
      <main className="px-3">
      <UpdateForm />
      </main>
    </>
  );
}

export default Page;
