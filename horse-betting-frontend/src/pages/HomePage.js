import React from 'react';

const HomePage = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="bg-primary py-5 text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold mb-3">Welcome to Our Betting Website</h1>
                            <p className="lead mb-4">
                                Experience the thrill of sports betting with our intuitive platform and competitive odds.
                            </p>
                            <button className="btn btn-light text-primary fw-medium">
                                Get Started
                            </button>
                        </div>
                        <div className="col-md-6 text-center">
                            <img
                            src="/images/pngegg.png"
                                alt="Betting Website"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Live Matches</h5>
                                    <p className="card-text">
                                        Check out the latest live matches and place your bets.
                                    </p>
                                    <button className="btn btn-primary">
                                        View Matches
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Popular Bets</h5>
                                    <p className="card-text">
                                        Explore our most popular betting markets and odds.
                                    </p>
                                    <button className="btn btn-primary">
                                        Browse Bets
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Promotions</h5>
                                    <p className="card-text">
                                        Check out our latest promotions and bonuses.
                                    </p>
                                    <button className="btn btn-primary">
                                        View Promotions
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-dark text-white py-3">
                <div className="container text-center">
                    <p className="mb-0">&copy; 2023 Betting Website. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
