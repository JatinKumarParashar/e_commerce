import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
	const [submitting, setSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((s) => ({ ...s, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// simple validation
		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			alert("Please fill in name, email and message.");
			return;
		}

		setSubmitting(true);
		// simulate async submit
		setTimeout(() => {
			setSubmitting(false);
			alert("Thanks for contacting LA COLLECTION — we'll get back to you soon!");
			setForm({ name: "", email: "", subject: "", message: "" });
		}, 900);
	};

	return (
		<main className="max-w-7xl mx-auto px-6 py-16">
			<section className="grid gap-12 md:grid-cols-2 items-center">
				<div>
					<h1 className="text-4xl font-extrabold text-slate-900 mb-4">Get in touch</h1>
					<p className="text-slate-600 mb-6">Have a question about a product, order, or returns? Send us a message and our support team will respond within 24 hours.</p>

					<div className="space-y-4 text-sm text-slate-700">
						<div>
							<h4 className="font-semibold text-sky-400">Customer Support</h4>
							<p className="text-slate-500">support@lacollection.com</p>
						</div>
						<div>
							<h4 className="font-semibold text-sky-400">Phone</h4>
							<p className="text-slate-500">+1 (555) 123-4567</p>
						</div>
						<div>
							<h4 className="font-semibold text-sky-400">Address</h4>
							<p className="text-slate-500">123 Fashion Ave, Suite 100, New York, NY</p>
						</div>
					</div>

					<div className="mt-8">
						<NavLink to="/products" className="inline-block bg-sky-400 text-white px-4 py-2 rounded hover:bg-sky-500 transition">Browse Products</NavLink>
					</div>
				</div>

				<form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
					<div className="grid gap-4">
						<div className="grid md:grid-cols-2 gap-4">
							<input
								name="name"
								value={form.name}
								onChange={handleChange}
								placeholder="Full name"
								className="w-full px-4 py-3 rounded border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-sky-200"
							/>
							<input
								name="email"
								type="email"
								value={form.email}
								onChange={handleChange}
								placeholder="Email address"
								className="w-full px-4 py-3 rounded border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-sky-200"
							/>
						</div>

						<input
							name="subject"
							value={form.subject}
							onChange={handleChange}
							placeholder="Subject (optional)"
							className="w-full px-4 py-3 rounded border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-sky-200"
						/>

						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							rows={6}
							placeholder="Write your message here"
							className="w-full px-4 py-3 rounded border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-sky-200"
						/>

						<div className="flex items-center justify-between">
							<div className="text-sm text-slate-500">We reply within 24 hours.</div>
							<button
								type="submit"
								disabled={submitting}
								className="bg-sky-400 disabled:opacity-60 text-white px-6 py-2 rounded hover:bg-sky-500 transition"
							>
								{submitting ? "Sending..." : "Send Message"}
							</button>
						</div>
					</div>
				</form>
			</section>
		</main>
	);
};

export default Contact;

