// --- AJ INDUSTRIES: NEURAL ARCHITECTURE ---
// EVLYN: Augmented Reality OS Assistant
// J.A.R.V.I.S: Neural Bridge & Connectivity Tool

const EVLYN_AI = {
    apiKey: "sk-f7293f4330464d3ea4638e615d5f5a13",
    
    async process(data, mode) {
        // J.A.R.V.I.S acts as the Neural Bridge (The Tool)
        const neuralBridge = "J.A.R.V.I.S";
        
        // EVLYN acts as the AR OS Assistant (The Interface/Logic)
        const assistant = "EVLYN";

        let entity = "THE TRIBUNAL";
        let personality = "Highly sophisticated, efficient, and impartial.";
        
        if (mode === 'lawyer') {
            entity = "AJ_LEGAL_ADVOCATE";
            personality = "Calculated, sharp, and focused on defense strategies.";
        } else if (mode === 'judge') {
            entity = "AJ_HIGH_JUDGE";
            personality = "Absolute, data-driven, and focused on institutional integrity.";
        }

        const prompt = `[NEURAL_BRIDGE_ACTIVE: ${neuralBridge}]
        [AR_ASSISTANT_ACTIVE: ${assistant}]
        [TARGET_ENTITY: ${entity}]
        
        J.A.R.V.I.S DATA FEED:
        - SYSTEM_INTEGRITY: 100%
        - HANDSHAKE: DeepSeek_Cloud_v1
        - SOURCE: AJ Industries Core
        ---
        CASE DATA SCAN:
        CATEGORY: ${data.category}
        ---
        SUB_ACCUSED: ${data.accused.name} (${data.accused.dept})
        SUB_STATEMENT: "${data.accused.statement}"
        ---
        SUB_VICTIM/TEACHER: ${data.victim.name} (${data.victim.dept})
        SUB_STATEMENT: "${data.victim.statement}"
        ---
        LOG_RECORDS: ${data.witnesses.map(w => w.name + ": " + w.text).join(' | ')}
        ---
        ${assistant} INSTRUCTIONS:
        1. Use J.A.R.V.I.S to bridge the connection between the user and ${entity}.
        2. Analyze statements as the AR OS for AJ Industries.
        3. ${entity} must provide the final verdict based on ${assistant}'s data scan.
        4. Detect specific crimes and logic inconsistencies.
        5. Structure output as an AJ Industries AR HUD overlay.`;

        try {
            const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: "deepseek-chat",
                    messages: [
                        { "role": "system", "content": `You are EVLYN, the Augmented Reality OS Assistant for AJ Industries. You use J.A.R.V.I.S as a neural bridge to connect the user with the ${entity}.` },
                        { "role": "user", "content": prompt }
                    ],
                    temperature: 0.8
                })
            });

            const result = await response.json();
            return `[AJ_INDUSTRIES_HUD]\n[BRIDGE: ${neuralBridge}]\n[OS: ${assistant}]\n---\n${result.choices[0].message.content}`;
        } catch (err) {
            console.error("NEURAL_SYNC_FAIL:", err);
            return `[${neuralBridge}_DISCONNECTED] OS ${assistant} manual fallback active.`;
        }
    }
};