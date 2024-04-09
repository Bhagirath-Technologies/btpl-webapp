import React from 'react';
import { Link } from 'react-router-dom';

const Ticket = () => {
    return (
        <>
            {/* icon starts  */}
            <li class="nav-item">
                <Link
                    to="#"
                    class="nav-link text-white text-primary-hover"
                    data-bs-toggle="modal"
                    data-bs-target="#topbarlogin"
                >
                    <i class="far fa-user me-2"></i>Login
                </Link>
            </li>
            {/* icon ends */}

            {/* <!-- Ticket Popup START --> */}
            <div class="modal fade ticket_icon" id="topbarlogin">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-primary pattern-overlay-7">
                            <div class="modal-title p-3 text-white-force">
                                <h5 class="mb-0">Sign in to your account!</h5>
                                <p class="mb-0">
                                    Nice to see you! Please log in with your account.
                                </p>
                            </div>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <div class="w-100 p-3">

                                <form>

                                    <div class="mb-3">
                                        <label class="form-label" for="exampleInputEmail1">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            id="exampleInputEmail1"
                                            placeholder="E-mail"
                                        />
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label" for="exampleInputPassword1">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="*********"
                                        />
                                    </div>

                                    <div class="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            class="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label class="form-check-label" for="exampleCheck1">
                                            keep me signed in
                                        </label>
                                    </div>

                                    <div class="row align-items-center">
                                        <div class="col-sm-4">
                                            <button type="submit" class="btn btn-dark btn-line">
                                                Login
                                            </button>
                                        </div>
                                        <div class="col-sm-8 text-sm-end">
                                            <span class="text-muted">
                                                Don't have an account?{" "}
                                                <Link to="sign-up.html">Signup here</Link>
                                            </span>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Ticket Popup END --> */}
        </>
    )
}

export default Ticket;