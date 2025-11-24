import React from 'react';

function Home() {
    return (
        <div>
            <header style={{
                backgroundColor: '#333',
                padding: '10px 20px',
                color: '#555', // ❌ Low contrast header text
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h2 style={{ margin: 0 }}>Amazing App</h2>
                <nav>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
                        <li><a href="#home" style={{ color: '#777', textDecoration: 'none' }}>Home</a></li> {/* ❌ Low contrast link */}
                        <li><a href="#features" style={{ color: '#888', textDecoration: 'none' }}>Features</a></li> {/* ❌ Low contrast */}
                        <li><a href="#about" style={{ color: '#999', textDecoration: 'none' }}>About</a></li> {/* ❌ Low contrast */}
                    </ul>
                </nav>
            </header>

            <main>
                <section id="home" style={{
                    backgroundColor: '#ffffff', // Solid background for predictable contrast
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center'
                }}>
                    <div style={{ maxWidth: '600px', padding: '20px' }}>
                        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ccc' }}> {/* ❌ Low contrast h1 */}
                            Welcome to Our Amazing App
                        </h1>
                        <p style={{ fontSize: '1rem', marginBottom: '2rem', color: '#ddd' }}> {/* ❌ Low contrast paragraph */}
                            Discover the future of web development with React. Build stunning user interfaces with ease.
                        </p>
                        <button
                            style={{
                                padding: '15px 30px',
                                fontSize: '1rem',
                                backgroundColor: '#eee', // ❌ Low contrast button background
                                border: 'none',
                                borderRadius: '25px',
                                cursor: 'pointer',
                                color: '#fff', // ❌ Low contrast button text
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
            </main>
        </div>
    );
}

export default Home;
