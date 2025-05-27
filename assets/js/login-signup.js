// login js start
 // Toggle password visibility
        function togglePassword(inputId) {
            const input = document.getElementById(inputId);
            const eye = document.getElementById(inputId + '-eye');
            
            if (input.type === 'password') {
                input.type = 'text';
                eye.classList.remove('fa-eye');
                eye.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                eye.classList.remove('fa-eye-slash');
                eye.classList.add('fa-eye');
            }
        }

        // Show forgot password modal
        function showForgotPassword() {
            const modal = new bootstrap.Modal(document.getElementById('forgotPasswordModal'));
            modal.show();
        }

        // Show alert message
        function showAlert(message, type = 'success') {
            const alertContainer = document.getElementById('alertContainer');
            const alertDiv = document.createElement('div');
            alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
            alertDiv.innerHTML = `
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            alertContainer.appendChild(alertDiv);
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                if (alertDiv.parentNode) {
                    alertDiv.remove();
                }
            }, 5000);
        }

        // Login form submission
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Show loading state
            submitBtn.classList.add('loading');
            
            // Simulate API call
            setTimeout(() => {
                // Remove loading state
                submitBtn.classList.remove('loading');
                
                // Basic validation (replace with actual authentication)
                if (email && password) {
                    showAlert('Login successful! Redirecting...', 'success');
                    setTimeout(() => {
                        // Redirect to main platform
                        window.location.href = 'social_network_platform.html';
                    }, 1500);
                } else {
                    showAlert('Please fill in all fields.', 'danger');
                }
            }, 2000);
        });

        // Forgot password form submission
        document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const email = document.getElementById('resetEmail').value;
            
            // Show loading state
            submitBtn.classList.add('loading');
            
            // Simulate API call
            setTimeout(() => {
                // Remove loading state
                submitBtn.classList.remove('loading');
                
                if (email) {
                    showAlert('Password reset link sent to your email!', 'success');
                    // Close modal
                    bootstrap.Modal.getInstance(document.getElementById('forgotPasswordModal')).hide();
                    // Clear form
                    this.reset();
                } else {
                    showAlert('Please enter your email address.', 'danger');
                }
            }, 2000);
        });

        // Social login functions
        function loginWithGoogle() {
            showAlert('Google login integration would be implemented here.', 'info');
        }

        function loginWithFacebook() {
            showAlert('Facebook login integration would be implemented here.', 'info');
        }

        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Add focus effects to form inputs
            const inputs = document.querySelectorAll('.form-control');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'scale(1.02)';
                    this.parentElement.style.transition = 'transform 0.2s ease';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'scale(1)';
                });
            });
        });
// login js end
//signup js start
        const form = document.getElementById('signupForm');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');

        // Password toggle functionality
        function togglePasswordVisibility(inputId, buttonId) {
            const input = document.getElementById(inputId);
            const button = document.getElementById(buttonId);
            const eyeIcon = button.querySelector('.eye-icon');
            const eyeOffIcon = button.querySelector('.eye-off-icon');
            
            if (input.type === 'password') {
                input.type = 'text';
                eyeIcon.style.display = 'none';
                eyeOffIcon.style.display = 'block';
            } else {
                input.type = 'password';
                eyeIcon.style.display = 'block';
                eyeOffIcon.style.display = 'none';
            }
        }

        // Add event listeners for password toggle buttons
        document.getElementById('togglePassword').addEventListener('click', function() {
            togglePasswordVisibility('password', 'togglePassword');
        });

        document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
            togglePasswordVisibility('confirmPassword', 'toggleConfirmPassword');
        });

        // Form validation
        function validateForm() {
            let isValid = true;
            
            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
                el.textContent = '';
            });

            // Username validation
            if (username.value.trim().length < 3) {
                showError('usernameError', 'Username must be at least 3 characters long');
                isValid = false;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }

            // Password validation
            if (password.value.length < 6) {
                showError('passwordError', 'Password must be at least 6 characters long');
                isValid = false;
            }

            // Confirm password validation
            if (password.value !== confirmPassword.value) {
                showError('confirmPasswordError', 'Passwords do not match');
                isValid = false;
            }

            return isValid;
        }

        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                // Simulate successful signup
                const btn = document.querySelector('.signup-btn');
                const originalText = btn.textContent;
                
                btn.textContent = 'Creating Account...';
                btn.disabled = true;
                
                setTimeout(() => {
                    alert('Account created successfully!');
                    btn.textContent = originalText;
                    btn.disabled = false;
                    form.reset();
                }, 2000);
            }
        });

        // Real-time validation
        confirmPassword.addEventListener('input', function() {
            const errorElement = document.getElementById('confirmPasswordError');
            if (password.value !== confirmPassword.value && confirmPassword.value !== '') {
                showError('confirmPasswordError', 'Passwords do not match');
            } else {
                errorElement.style.display = 'none';
            }
        });

        // Login link functionality
        document.getElementById('loginLink').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirect to login page');
        });
    
// signup js end