import  React  from "react";


class Footer extends React.Component {
    render() {
        return (

            <section id="contact" class="section has-img-bg pb-0">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-5 my-3">
                            <h6 class="mb-0">Phone</h6>
                            <p class="mb-4">+57 321 990 83 88</p>

                            <h6 class="mb-0">Address</h6>
                            <p class="mb-4">12345 Fake ST NoWhere AB Country</p>

                            <h6 class="mb-0">Email</h6>
                            <p class="mb-0">info@website.com</p>
                            <p></p>
                        </div>
                        <div class="col-md-7">
                            <form>
                                <h4 class="mb-4">Drop Us A Line</h4>
                                <div class="form-row">
                                    <div class="form-group col-sm-4">
                                        <input type="text" class="form-control text-white rounded-0 bg-transparent" name="name" placeholder="Name" />
                                    </div>
                                    <div class="form-group col-sm-4">
                                        <input type="email" class="form-control text-white rounded-0 bg-transparent" name="Email" placeholder="Email" />
                                    </div>
                                    <div class="form-group col-sm-4">
                                        <input type="text" class="form-control text-white rounded-0 bg-transparent" name="subject" placeholder="Subject" />
                                    </div>
                                    <div class="form-group col-12">
                                        <textarea name="message" id="" cols="30" rows="4" class="form-control text-white rounded-0 bg-transparent" placeholder="Message"></textarea>

                                    </div>
                                    <div class="form-group col-12 mb-0">
                                        <button type="submit" class="btn btn-primary rounded w-md mt-3">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <footer class="mt-5 py-4 border-top border-secondary">
                        <p class="mb-0 small">&copy; <script>document.write(new Date().getFullYear())</script>, LeadMark Created By <a href="https://www.devcrud.com" target="_blank" rel="noopener noreferrer" >DevCrud.</a>  All rights reserved </p>
                    </footer>

                </div>
            </section>
        )
    }
};

export default Footer;