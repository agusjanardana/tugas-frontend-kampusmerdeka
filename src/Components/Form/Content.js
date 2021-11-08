import { useState, useEffect } from 'react';

const Form = () => {
    const [values, setValues] = useState({
        nama: '',
        email: '',
        number: '',
        phoneNumber: '',
        pendidikan: '',
        program: '',
        foto: '',
        harapan: '',
    });

    useEffect(() => {
        console.log('Ada Perubahan');
    }, [values]);

    const handleChange = (e) => {
        const key = e.target.name;
        const formDataTarget = e.target.value;
        if (formDataTarget == "" && key == "nama" || key == "email" || key == "number") {
            setError({...setViewError, [key] : error[key]})
        }
        setValues({ ...values, [key]: formDataTarget });
    };

    const handleSubmit = () => {
        alert('Submited');
        setValues.nama('a');
    };

    const handleReset = () => {
        setValues({
            nama: '',
            email: '',
            number: '',
            phoneNumber: '',
            pendidikan: '',
            program: '',
            foto: '',
            harapan: '',
        });
    };

    const baseError = {
        nama : "Nama Tidak Boleh Kosong",
        email: "Email Harus Benar",
        number: "Nomor Tidak Valid"
    }
    const [error, setError] = useState(baseError);
    const [viewError, setViewError] = useState([{
        nama: "",
        email: "",
        number: "",
    }])

    return (
        <form className="col-lg-8 mx-auto" onSubmit={handleSubmit}>
            <div class="form-group row p-2">
                <label for="inputNama" class="col-sm-2 col-form-label">
                    Nama Lengkap
                </label>
                <div class="col-sm-10">
                    <input
                        onChange={handleChange}
                        value={values.nama}
                        name="nama"
                        type="text"
                        class="form-control"
                        id="inputNama"
                        placeholder="Nama Lengkap"
                    />
                </div>
            </div>
            <div class="form-group row p-2">
                <label for="inputEmail" class="col-sm-2 col-form-label">
                    Email
                </label>
                <div class="col-sm-10">
                    <input
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        type="email"
                        class="form-control"
                        id="inputEmail"
                        placeholder="Email"
                        required
                    />
                </div>
            </div>
            <div class="form-group row p-2">
                <label for="inputPhone" class="col-sm-2 col-form-label">
                    No Handphone
                </label>
                <div class="col-sm-10">
                    <input
                        name="phoneNumber"
                        type="number"
                        class="form-control"
                        id="inputPhone"
                        placeholder="No Handphone"
                        onChange={handleChange}
                        value={values.phoneNumber}
                    />
                </div>
            </div>
            <fieldset class="form-group p-2">
                <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0">Latar Belakang Pendidikan</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input
                                name="pendidikan"
                                class="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadioIT"
                                onChange={handleChange}
                                value={values.pendidikan}
                            />
                            <label class="form-check-label" for="gridRadioIT">
                                IT
                            </label>
                        </div>
                        <div class="form-check">
                            <input
                                name="pendidikan"
                                class="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadioNonIT"
                                onChange={handleChange}
                                value={values.pendidikan}
                            />
                            <label class="form-check-label" for="gridRadios">
                                Non IT
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="form-group row p-2">
                <div class="col-sm-2">Kelas Coding yang Dipilih</div>
                <div class="col-sm-10">
                    <div class="form-check">
                        <select name="program" class="form-control" onChange={handleChange} value={values.program}>
                            <option>Pilih Salah Satu Program</option>
                            <option value="Golang">Coding Backend with Golang</option>
                            <option value="ReactJs">Coding Frontend with ReactJS</option>
                            <option value="Fullstack">Fullstack Developer</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group row p-2">
                <div class="col-sm-2">Foto Surat Kesungguhan</div>
                <div class="col-sm-10">
                    <input
                        name="foto"
                        onChange={handleChange}
                        value={values.foto}
                        type="file"
                        class="form-control-file"
                        id="exampleFormControlFile1"
                        required
                    />
                </div>
            </div>
            <div class="form-group row p-2">
                <div class="col-sm-2">Harapan Untuk Coding Bootcamp Ini</div>
                <div class="col-sm-10">
                    <textarea
                        name="harapan"
                        onChange={handleChange}
                        value={values.harapan}
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </div>
            <div class="form-group row p-2">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">
                        Sign in
                    </button>
                    <button onClick={handleReset} type="submit" class="btn btn-danger">
                        Reset
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;
