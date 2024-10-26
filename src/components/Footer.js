import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-custom-pink rounded-sm text-white py-4">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <ul className="mt-2">
                            <li className="flex items-center">
                                <span className="mr-2">📧</span>
                                <a href="mailto:your-email@gmail.com" className="hover:underline">agungpurba16@gmail.com</a>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📞</span>
                                <a href="tel:+123456789" className="hover:underline">+62 823 6374 7790</a>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">💬</span>
                                <a href="https://wa.me/082363747909" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-sm">
                        &copy; {new Date().getFullYear()}@agung. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
