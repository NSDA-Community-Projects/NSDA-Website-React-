import React from 'react';
import Navbar from '../components/layout/Navbar';
import Form from '../components/common/Form';
import Footer from '../components/layout/Footer';

function Register() {
  return (
    <main>
      <Navbar />
      <div style={{ backgroundColor: 'var(--cloud-break)', minHeight: 'calc(100vh - 200px)', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Form />
      </div>
      <Footer />
    </main>
  );
}

export default Register;