import * as React from "react";
import { Frame, Stack, Scroll } from "framer";
import "./styles.css";

export function App() {
    return (
        <Scroll width="100%" height="100%" background="#fbfaf6">
            <Frame width="100%" background="none" style={{ minHeight: "100vh" }}>
                <Stack direction="vertical" gap={0} width="100%">
                    <Frame className="topnav" width="100%" background="rgba(255,255,255,0.64)" height={92}>
                        <div className="nav-inner">
                            <div className="nav-logo">
                                <div className="nav-logo-badge">
                                    <svg width="22" height="22" viewBox="0 0 30 30"><path d="M15 4c5 3 8 8 8 13a8 8 0 0 1-16 0c0-5 3-10 8-13z" fill="#3F8A4C"/><path d="M15 12v13" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>
                                </div>
                                <div className="nav-logo-text">Grove</div>
                            </div>
                            <ul className="nav-links">
                                <li><a href="#home" className="active">Home</a></li>
                                <li><a href="#communities">Communities</a></li>
                                <li><a href="#campaigns">Campaigns</a></li>
                                <li><a href="#volunteer">Volunteer</a></li>
                                <li><a href="#resources">Resources</a></li>
                                <li><a href="#stories">Success Stories</a></li>
                            </ul>
                            <div className="nav-right">
                                <div className="icon-btn"><svg width="18" height="18" viewBox="0 0 18 18"><circle cx="8" cy="8" r="6" stroke="#16221A" strokeWidth="1.5" fill="none"/><path d="M12.5 12.5L16 16" stroke="#16221A" strokeWidth="1.5" strokeLinecap="round"/></svg></div>
                                <a className="btn btn-outline-ink" href="#signin">Sign In</a>
                                <a className="btn btn-leaf" href="#join">Join Community</a>
                            </div>
                        </div>
                    </Frame>
                    <Frame className="hero" width="100%" background="none" height={940}>
                        <div className="wrap">
                            <div className="hero-grid">
                                <div className="hero-copy">
                                    <span className="eyebrow">♥ Stronger Together</span>
                                    <h1>Join Together,<br/>Create <span className="accent">Impact</span></h1>
                                    <p>Grove is a community platform for social and environmental workers. Join groups, take action, and inspire change in your community and beyond.</p>
                                    <div className="hero-actions">
                                        <a className="btn btn-leaf" href="#join">Join a Community</a>
                                        <a className="btn btn-outline-ink" href="#start">Start a Campaign →</a>
                                    </div>
                                    <div className="hero-proof">
                                        <div className="avatar-stack">
                                            <img src="https://images.pexels.com/photos/6646951/pexels-photo-6646951.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Grove member" />
                                            <img src="https://images.pexels.com/photos/9287491/pexels-photo-9287491.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Grove member" />
                                            <img src="https://images.pexels.com/photos/30004322/pexels-photo-30004322.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Grove member" />
                                            <img src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Grove member" />
                                        </div>
                                        <div className="hero-proof-text"><span className="num">78K+</span><div className="lbl">Active changemakers making a difference</div></div>
                                    </div>
                                </div>
                                <div className="hero-photo-wrap">
                                    <div className="hero-photo-blob">
                                        <img src="https://images.pexels.com/photos/5029929/pexels-photo-5029929.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="A diverse group of volunteers planting a tree together" />
                                    </div>
                                    <div className="float-card fc-climate">
                                        <div className="fc-icon"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 2c3 2 4 5 4 7a4 4 0 0 1-8 0c0-2 1-5 4-7z" fill="#3F8A4C"/></svg></div>
                                        <div><div className="fc-title">Climate Action</div><div className="fc-sub">Reduce · Reuse · Restore</div></div>
                                    </div>
                                    <div className="float-card fc-power">
                                        <div className="fc-icon"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="5" cy="6" r="2" fill="#3F8A4C"/><circle cx="11" cy="6" r="2" fill="#3F8A4C"/><path d="M2 13c0-2 1.5-3 3-3s3 1 3 3M8 13c0-2 1.5-3 3-3s3 1 3 3" stroke="#3F8A4C" strokeWidth="1.3" fill="none"/></svg></div>
                                        <div><div className="fc-title">Community Power</div><div className="fc-sub">Small actions, big change</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Frame>
                </Stack>
            </Frame>
        </Scroll>
    );
}
