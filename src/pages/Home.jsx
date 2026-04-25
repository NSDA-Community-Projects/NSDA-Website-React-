import React from 'react';
import Form from '../components/common/Form';
import Footer from '../components/layout/Footer';
import CTA from '../sections/CTA';
import Leadership from '../sections/Leadership';

function Home() {
  return (
    <main>
      {/* Hero Section - @Bint_Sualih1 will add */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        backgroundColor: 'var(--cloud-break)',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h1 style={{ color: 'var(--prussian-blue)' }}>NSDA Website</h1>
          <p>Hero section coming soon from @Bint_Sualih1</p>
        </div>
      </div>
      
      {/* About Section - @jzzmiiinn will add */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        backgroundColor: 'white',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h2 style={{ color: 'var(--prussian-blue)' }}>About NSDA</h2>
          <p>About section coming soon from @jzzmiiinn</p>
        </div>
      </div>
      
      {/* What We Do Section - @jzzmiiinn will add */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        backgroundColor: 'var(--cloud-break)',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h2 style={{ color: 'var(--prussian-blue)' }}>What We Do</h2>
          <p>What We Do section coming soon from @jzzmiiinn</p>
        </div>
      </div>
      
      {/* Mentorship Impact - @islamicsoul4 will add */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        backgroundColor: 'white',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h2 style={{ color: 'var(--prussian-blue)' }}>Mentorship Impact</h2>
          <p>Impact section coming soon from @islamicsoul4</p>
        </div>
      </div>
      
      {/* Projects Section - @islamicsoul4 will add */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        backgroundColor: 'var(--cloud-break)',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h2 style={{ color: 'var(--prussian-blue)' }}>Projects</h2>
          <p>Projects section coming soon from @islamicsoul4</p>
        </div>
      </div>
      
      {/* Nujum Section - @han_bts_army will add */}
      <div style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        backgroundColor: 'white',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h2 style={{ color: 'var(--prussian-blue)' }}>Nujum al-Code</h2>
          <p>Nujum section coming soon from @han_bts_army</p>
        </div>
      </div>
      
      <Leadership />
      
      <Form />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;
