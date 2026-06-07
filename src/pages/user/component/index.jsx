import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Store user data in localStorage (simple demo)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((u) => u.email === formData.email);

    if (userExists) {
      setErrors({ email: 'Email already registered' });
      return;
    }

    users.push({
      id: Date.now(),
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    });

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify({ fullName: formData.fullName, email: formData.email }));

    setSuccess('Registration successful! Redirecting...');
    setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <main className="bg-linear-to-br from-slate-50 to-slate-100 min-h-screen flex items-center justify-center py-12 px-6 sm:px-10">
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Join us</p>
            <h1 className="mt-3 text-3xl font-extrabold text-slate-900">Create Account</h1>
            <p className="mt-2 text-sm text-slate-600">Start shopping today with your new account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 transition focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  errors.fullName ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50 focus:bg-white'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 transition focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50 focus:bg-white'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 transition focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  errors.password ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50 focus:bg-white'
                }`}
              />
              {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full rounded-xl border px-4 py-3 text-sm font-medium text-slate-900 placeholder-slate-400 transition focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  errors.confirmPassword ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-slate-50 focus:bg-white'
                }`}
              />
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>}
            </div>
            {success && (
              <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                {success}
              </div>
            )}
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-linear-to-r from-sky-400 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-400/30 transition hover:shadow-sky-400/50 hover:from-sky-500 hover:to-sky-600 active:scale-95"
            >
              Create Account
            </button>
          </form>
        </div>
        <div className="mt-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 px-6 py-4 text-center">
          <p className="text-xs text-slate-600">
            By creating an account, you agree to our{' '}
            <NavLink to="#" className="font-semibold text-sky-500 hover:underline">
              Terms of Service
            </NavLink>{' '}
            and{' '}
            <NavLink to="#" className="font-semibold text-sky-500 hover:underline">
              Privacy Policy
            </NavLink>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
