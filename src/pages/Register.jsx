import React from 'react';
import Navbar from '../components/layout/Navbar';
import Form from '../components/common/Form';
import Footer from '../components/layout/Footer';

function Register() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px', backgroundColor: 'var(--cloud-break)', minHeight: '100vh' }}>
        <Form />
      </div>
      <Footer />
    </main>
  );
}

export default Register;