import React from 'react';

function Home() {
    return (
        <div>
            <header style={{
                backgroundColor: '#333',
                color: 'white',
                padding: '10px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h2 style={{ margin: 0, fontSize: '8px' }}>Amazing App</h2> {/* ❌ Very small */}
                <nav>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
                        <li><a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '8px' }}>Home</a></li> {/* ❌ Very small */}
                        <li><a href="#features" style={{ color: 'white', textDecoration: 'none', fontSize: '8px' }}>Features</a></li> {/* ❌ Very small */}
                        <li><a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '8px' }}>About</a></li> {/* ❌ Very small */}
                    </ul>
                </nav>
            </header>

            <main>
                <section id="home" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center'
                }}>
                    <div style={{ maxWidth: '600px', padding: '20px' }}>
                        <h1 style={{ fontSize: '10px', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                            Welcome to Our Amazing App
                        </h1> {/* ❌ Very small */}
                        <p style={{ fontSize: '8px', marginBottom: '2rem', lineHeight: '1.6' }}>
                            Discover the future of web development with React. Build stunning user interfaces with ease.
                        </p> {/* ❌ Very small */}
                        <button
                            style={{
                                padding: '5px 10px', // ❌ Small touch target
                                fontSize: '8px',      // ❌ Very small
                                backgroundColor: '#ff6b6b',
                                border: 'none',
                                borderRadius: '25px',
                                cursor: 'pointer',
                                color: 'white',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            Get Started
                        </button>
                    </div>
                </section>

                <section id="features" style={{
                    padding: '50px 20px',
                    backgroundColor: '#f4f4f4',
                    textAlign: 'center'
                }}>
                    <h2 style={{ color: '#333', marginBottom: '2rem', fontSize: '8px' }}>Features</h2> {/* ❌ Very small */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        gap: '20px'
                    }}>
                        <article style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            maxWidth: '300px',
                            flex: '1 1 300px'
                        }}>
                            <h3 style={{ fontSize: '8px' }}>Fast Performance</h3> {/* ❌ Very small */}
                            <p style={{ fontSize: '8px' }}>Experience lightning-fast loading and smooth interactions.</p> {/* ❌ Very small */}
                        </article>
                        <article style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            maxWidth: '300px',
                            flex: '1 1 300px'
                        }}>
                            <h3 style={{ fontSize: '8px' }}>Responsive Design</h3> {/* ❌ Very small */}
                            <p style={{ fontSize: '8px' }}>Looks great on all devices, from mobile to desktop.</p> {/* ❌ Very small */}
                        </article>
                        <article style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                            maxWidth: '300px',
                            flex: '1 1 300px'
                        }}>
                            <h3 style={{ fontSize: '8px' }}>Easy to Use</h3> {/* ❌ Very small */}
                            <p style={{ fontSize: '8px' }}>Intuitive interface designed for the best user experience.</p> {/* ❌ Very small */}
                        </article>
                    </div>
                </section>

                <section id="about" style={{
                    padding: '50px 20px',
                    backgroundColor: '#333',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <h2 style={{ fontSize: '8px' }}>About Us</h2> {/* ❌ Very small */}
                    <p style={{ fontSize: '8px' }}>We are passionate about creating amazing web applications with React.</p> {/* ❌ Very small */}
                </section>
            </main>

            <footer style={{
                backgroundColor: '#222',
                color: 'white',
                textAlign: 'center',
                padding: '20px'
            }}>
                <p style={{ fontSize: '8px' }}>&copy; 2023 Amazing App. All rights reserved.</p> {/* ❌ Very small */}
            </footer>
        </div>
    );
}

export default Home;
