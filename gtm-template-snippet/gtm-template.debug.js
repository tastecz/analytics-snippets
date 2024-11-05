window.__taste = function (a, b, c, d) {
    switch (a) {
        case 'session_storage':
            if (b === 'set') {
                try {
                    window.sessionStorage.setItem(c, d);
                } catch (err) {
                    console.log(err);
                }
            } else if (b = 'get') {
                try {
                    return window.sessionStorage.getItem(c);
                } catch (err) {
                    console.log(err);
                }
            } else {
                return;
            }
            break;

        case 'user_data':
            try {
                let outputArr = [];
                for (let i in b) {
                    let paramName = b[i][0];
                    let paramSelector = b[i][1];
                    let selector = c ? `form${c} ` : '';
                    selector += `input[${paramSelector}]`;
                    let input = document.querySelector(selector);
                    if (input && input.value && input.value !== '') {
                        if (paramName === 'phone_number' || paramName === 'postal_code') {
                            let finalValue = input.value;
                            finalValue = finalValue.replace(/\s+/g, '');
                            outputArr.push([paramName, finalValue]);
                        } else {
                            outputArr.push([paramName, input.value]);
                        }
                    }
                }
                return getJson(outputArr);
            } catch (err) {
                console.log(err);
            }
    }
}

function getJson(userData) {
    if (!userData || !Array.isArray(userData) || userData.length === 0) return undefined;
    let outputJson = {};
    for (let i in userData) {
        let paramName = userData[i][0];
        let paramValue = userData[i][1];
        if (paramName === 'email' || paramName === 'phone_number') {
            outputJson[paramName] = paramValue;
        } else {
            if (!outputJson.address) {
                outputJson.address = {};
            }
            outputJson.address[paramName] = paramValue;
        }
    }
    return JSON.stringify(outputJson);
}