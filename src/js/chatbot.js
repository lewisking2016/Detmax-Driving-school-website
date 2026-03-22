// Chatbot functionality and data

const faqCategories = {
    "Driving Courses": [
        "Do you offer both manual and automatic driving lessons?",
        "How long does the driving course take?",
        "Do you guarantee a driving license after training?",
        "Are the training vehicles safe?",
        "What safety measures are in place during lessons?"
    ],
    "Computer Courses": [
        "What computer courses are available?",
        "Do I need prior computer knowledge?",
        "Will I receive a certificate?",
        "Do you offer flexible class schedules?",
        "Can I enroll in more than one course?"
    ],
    "Fees & Enrollment": [
        "How much are the course fees?",
        "Do you offer discounts?",
        "How do I enroll?",
        "What documents are required for enrollment?",
        "Are fees refundable?"
    ],
    "General Info": [
        "What courses do you offer?",
        "Where are you located?",
        "How do I contact Detmax?",
        "What behavior is expected from students?",
        "Do you offer job placement assistance?"
    ]
};

// Map questions explicitly to their answers based on faqData.
const faqMapping = {
    "What courses do you offer?": "We offer professional driving courses (both manual and automatic) and a variety of computer training programs, including basic computer skills, packages, and advanced courses.",
    "Where are you located?": "Detmax Driving School and Computer College operates from accessible training centers. Please contact us at 0114971070 for the nearest branch location.",
    "How do I contact Detmax?": "You can reach us by Phone: 0114971070 / 0111379171 or visit our website: detmaxinstitute.co.ke",
    "How do I enroll?": "You can enroll by visiting our office, contacting us via phone, or registering through our website.",
    "What documents are required for enrollment?": "You need: National ID or Passport, Passport-size photos, and any required academic documents (for computer courses).",
    "How much are the course fees?": "Fees vary depending on the course. For example, the full Driving Curriculum is 13,000 KES. Please contact us for the latest pricing and available discounts.",
    "Do you offer discounts?": "Yes, we occasionally offer promotions (e.g., student discounts). Currently, there is a 20% discount on all computer courses!",
    "Are fees refundable?": "Fees are generally non-refundable, except under special circumstances approved by management.",
    "Do you offer both manual and automatic driving lessons?": "Yes, we provide training for both manual and automatic vehicles.",
    "How long does the driving course take?": "The duration depends on the package selected and the learner's progress. Typically, it includes 14 practical lessons.",
    "Do you guarantee a driving license after training?": "No, we prepare you thoroughly, but passing the official driving test depends on your performance.",
    "Are the training vehicles safe?": "Yes, all our vehicles are regularly maintained and meet safety standards.",
    "What computer courses are available?": "We offer beginner to advanced programs, including computer basics, Microsoft Office packages, internet skills, graphic design basics, and coding.",
    "Do I need prior computer knowledge?": "No, we have beginner-friendly courses for those with no prior experience.",
    "Will I receive a certificate?": "Yes, certificates are issued upon successful completion of the course.",
    "Do you offer flexible class schedules?": "Yes, we provide flexible schedules, including weekday and weekend classes. The computer lessons are 80% online at your own comfort!",
    "What behavior is expected from students?": "Students are expected to be respectful, disciplined, and follow all institutional rules.",
    "What safety measures are in place during lessons?": "We follow strict safety protocols, including instructor supervision and well-maintained vehicles.",
    "Can I enroll in more than one course?": "Yes, you can enroll in multiple courses depending on your schedule.",
    "Do you offer job placement assistance?": "We may provide guidance and recommendations, but job placement is not guaranteed."
};

export const initChatbotComponent = () => {
    const chatbotHTML = `
    <!-- Tooltip -->
    <div class="chatbot-tooltip" id="chatbotTooltip">
        For Q&A chat here 💬
    </div>

    <!-- Chatbot Toggle Button -->
    <button class="chatbot-toggle" id="chatbotToggle" title="Chat with Detmax AI">
        <i data-lucide="bot"></i>
    </button>

    <!-- Chatbot Window -->
    <div class="chatbot-window" id="chatbotWindow">
        <div class="chatbot-header">
            <div class="chatbot-header-info">
                <i data-lucide="bot" class="chatbot-icon"></i>
                <div>
                    <h4>Detmax Assistant</h4>
                    <span>Select a topic to get answers</span>
                </div>
            </div>
            <button class="chatbot-close" id="chatbotClose"><i data-lucide="x"></i></button>
        </div>
        
        <div class="chatbot-messages" id="chatbotMessages">
            <div class="chat-message bot">
                <div class="message-content">
                    Hello! Welcome to Detmax Driving School & Computer College. What would you like to know about?
                </div>
            </div>
            <div class="chat-options" id="chatOptions">
                <!-- Categories will be injected here -->
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    const toggleBtn = document.getElementById('chatbotToggle');
    const closeBtn = document.getElementById('chatbotClose');
    const chatWindow = document.getElementById('chatbotWindow');
    const chatMessages = document.getElementById('chatbotMessages');
    const chatOptionsContainer = document.getElementById('chatOptions');

    const scrollToBottom = () => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const appendUserMessage = (text) => {
        const msgHtml = `
            <div class="chat-message user">
                <div class="message-content">${text}</div>
            </div>
        `;
        chatOptionsContainer.insertAdjacentHTML('beforebegin', msgHtml);
        scrollToBottom();
    };

    const appendBotMessage = (text) => {
        const msgHtml = `
            <div class="chat-message bot">
                <div class="message-content">${text}</div>
            </div>
        `;
        chatOptionsContainer.insertAdjacentHTML('beforebegin', msgHtml);
        scrollToBottom();
    };

    const showCategories = () => {
        chatOptionsContainer.innerHTML = '';
        Object.keys(faqCategories).forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'chat-chip category-chip';
            btn.textContent = cat;
            btn.addEventListener('click', () => {
                appendUserMessage(cat);
                showQuestions(cat);
            });
            chatOptionsContainer.appendChild(btn);
        });
        scrollToBottom();
    };

    const showQuestions = (category) => {
        chatOptionsContainer.innerHTML = '';
        const questions = faqCategories[category];
        
        appendBotMessage(`Here are some common questions about <strong>${category}</strong>:`);

        questions.forEach(q => {
            const btn = document.createElement('button');
            btn.className = 'chat-chip outline-chip';
            btn.textContent = q;
            btn.addEventListener('click', () => {
                appendUserMessage(q);
                answerQuestion(q);
            });
            chatOptionsContainer.appendChild(btn);
        });

        const backBtn = document.createElement('button');
        backBtn.className = 'chat-chip back-chip';
        backBtn.innerHTML = '<i data-lucide="arrow-left" style="width:14px;height:14px;margin-bottom:-2px;margin-right:4px;"></i> Back to Categories';
        backBtn.addEventListener('click', () => {
            appendUserMessage("Show Categories");
            showCategories();
            if (typeof lucide !== 'undefined') lucide.createIcons();
        });
        chatOptionsContainer.appendChild(backBtn);
        
        if (typeof lucide !== 'undefined') lucide.createIcons();
        scrollToBottom();
    };

    const answerQuestion = (question) => {
        const answer = faqMapping[question] || "Please contact our support for more information.";
        appendBotMessage(answer);
        
        // After answering, show categories again so they can ask more
        setTimeout(() => {
            appendBotMessage("Is there anything else you'd like to know?");
            showCategories();
        }, 500);
    };

    // Toggle Chatbot
    toggleBtn.addEventListener('click', () => {
        chatWindow.classList.add('active');
        toggleBtn.classList.add('hidden');
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.remove('active');
        toggleBtn.classList.remove('hidden');
    });

    // Initialize the UI with categories
    showCategories();

    // Show initial tooltip
    setTimeout(() => {
        const tooltip = document.getElementById('chatbotTooltip');
        if (tooltip && !chatWindow.classList.contains('active')) {
            tooltip.classList.add('show');
            // Hide it automatically after 6 seconds
            setTimeout(() => {
                tooltip.classList.remove('show');
            }, 6000);
        }
    }, 2000); // Popup 2 seconds after page load

    // Initialize lucide icons for newly injected HTML
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
};
