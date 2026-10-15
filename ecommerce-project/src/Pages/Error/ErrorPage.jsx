import { Header } from '../../Components/Header.jsx';
import './ErrorPage.css'; 

export function ErrorPage() {
    return (
        <>
            <Header />
            <div className="error-page-body">
                <div className="error-container">
                    <div className="error-planet"></div>
                    <div className="error-code">404</div>
                    <h1>Page Not Found</h1>
                    <p>
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <a href="/" className="error-btn-home">Return Home</a>
                </div>
            </div>
        </>
    );
}