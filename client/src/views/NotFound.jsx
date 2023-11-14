import {useNavigate} from 'react-router-dom'
export const NotFound = () => {
    const navigate = useNavigate()
    const navigateToHome = (e) => {
        e.preventDefault()
        navigate('/')
    }
    return (
        <div className="d-flex align-items-center justify-content-center vh-100" style={{paddingBottom: "40vh"}}>
            <div className="text-center row">
                <div className="col-md-6">
                    <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 mt-5">
                    <p className="fs-3"> <span className="text-danger">Oops!</span> Page not found.</p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <button onClick={navigateToHome} className="btn btn-primary">Go Home</button>
                </div>
            </div>
        </div>
    );
}