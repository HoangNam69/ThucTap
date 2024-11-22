import './App.css';
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [errors, setErrors] = useState({ username: "", password: "" })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })

    validation(name, value);
  }

  const validation = (name, value) => {
    let error = "";
    if (name === "username" && value.trim() === "") {
      error = "Username không được để trống.";
    } else if (name === "password" && value.length < 8) {
      error = "Password phải có ít nhất 8 ký tự."
    }

    setErrors({
      ...errors, [name]: error
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (formData.username.trim() === "") {
      newErrors['username'] = "Username không được để trống.";
    } else if (formData.password.length < 8) {
      newErrors['password'] = "Password không được ít hơn 8 ký tự.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Đăng nhập thành công!");
      console.log("Form Data:", formData);
    }
  }

  return (
    <div className='container'>
      <form className='form-login' onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className='form-login__username'>
          <label className='form-login-username__label'>Username:</label>
          <input type='text' name="username" placeholder='Enter your username!' value={formData.username} className='form-login-username__field' onChange={handleChange} />
        </div>
        {errors.username && (
          <p style={{ color: "#f0456d", textShadow: "5px 5px 10px #000" }}>{errors.username}</p>
        )}
        <div className='form-login__password'>
          <label className='form-login-password__label'>Password:</label>
          <input type='password' name="password" placeholder='Enter your password' value={formData.password} className='form-login-password__field' onChange={handleChange} />
        </div>
        {errors.password && (
          <p style={{ color: "#f0456d", textShadow: "5px 5px 25px #000" }}>{errors.password}</p>
        )}
        <input type='submit' value="LOGIN" className='btn btn-login' />
      </form>
    </div>
  );
}

export default App;
