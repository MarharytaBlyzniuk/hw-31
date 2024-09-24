console.log('#14. JavaScript homework example file')

/*
 *
 * #1
 *
 * Функціональні Вимоги:
 * 1. Вхідні параметри:
 *  - `segment`: Рядок, який представляє сегмент шляху URL до ресурсу на API. Наприклад: `/posts` для отримання списку постів, `/posts/1` для отримання посту з ідентифікатором 1.
 *
 * 2. Запити до API:
 *  - Виконати асинхронний HTTP GET запит до `https://jsonplaceholder.typicode.com`, додавши сегмент шляху `segment` до базового URL.
 *  - Використати `fetch` для надсилання запиту.
 *
 * 3. Обробка відповідей:
 *  - У разі успішної відповіді (HTTP статус 200-299), конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (HTTP статус виходить за межі 200-299), повернути HTTP статус як індикатор помилки.
 *  - При виникненні помилки в процесі виконання запиту (наприклад, мережева помилка), логувати помилку у консоль і повертати текст помилки.
 *
 * 4. Логування:
 *  - Вивести у консоль отримані дані при успішному запиті.
 *  - Логувати помилку у консоль при її виникненні.
 *
 * Технічні вимоги:
 * - Використання сучасних можливостей JavaScript (ES6+), зокрема асинхронних функцій (`async/await`).
 * - Належне управління помилками та виключеннями.
 * - Код має бути чистим, добре структурованим, зі зрозумілими назвами змінних та функцій.
 *
*/

async function getData(segment) {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const url = `${baseUrl}${segment}`;

    try {
        const response = await fetch(url);

        // Перевірка на успішний статус відповіді (HTTP статус 200-299)
        if (response.ok) {
            const data = await response.json();
            console.log('Отримані дані:', data); // Логування отриманих даних
            return data; // Повертаємо дані у форматі JSON
        } else {
            console.error(`Помилка: HTTP статус ${response.status}`); // Логування помилки статусу
            return response.status; // Повертаємо статус помилки
        }
    } catch (error) {
        console.error('Помилка виконання запиту:', error.message); // Логування мережевої помилки
        return `Помилка: ${error.message}`; // Повертаємо текст помилки
    }
}

// Приклад виклику функції:
// getData('/posts/1')
//  .then(data => console.log('Результат:', data))
//  .catch(err => console.error('Фінальна помилка:', err));


/*
 *
 * #2
 * Функціональні вимоги:
 *
 * 1. Вхідні параметри:
 *  - `segment`: Рядок, що вказує на сегмент API для виконання POST запиту (наприклад, `/posts`).
 *  - `data`: Об'єкт, який містить дані для відправки в тілі запиту.
 *
 * 2. Виконання запиту:
 *  - Виконати асинхронний HTTP POST запит до `https://jsonplaceholder.typicode.com`, додавши `segment` до URL. Використати `data` як тіло запиту.
 *  - Встановити необхідні заголовки для запиту, зокрема `Content-Type: application/json`.
 *
 * 3. Обробка відповіді:
 *  - У разі успішного отримання відповіді (HTTP статус 200-299), конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (HTTP статус виходить за межі 200-299), повернути повідомлення про помилку.
 *
 * 4. Логування:
 *  - Логувати у консоль результат або повідомлення про помилку.
 *
 * Технічні Вимоги:
 * - Використання сучасних можливостей JavaScript (ES6+), зокрема асинхронних функцій (`async/await`).
 * - Належне управління помилками та відповідями від API.
 *
*/

async function postData(segment, data) {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const url = `${baseUrl}${segment}`;

    try {
        const response = await fetch(url, {
            method: 'POST', // Використання методу POST
            headers: {
                'Content-Type': 'application/json', // Встановлення заголовку для JSON
            },
            body: JSON.stringify(data), // Перетворення даних у JSON
        });

        // Перевірка на успішний статус відповіді (HTTP статус 200-299)
        if (response.ok) {
            const responseData = await response.json();
            console.log('Успішна відповідь:', responseData); // Логування успішної відповіді
            return responseData; // Повертаємо отримані дані
        } else {
            console.error(`Помилка: HTTP статус ${response.status}`); // Логування помилки статусу
            return `Помилка: HTTP статус ${response.status}`;
        }
    } catch (error) {
        console.error('Помилка виконання запиту:', error.message); // Логування мережевої або іншої помилки
        return `Помилка: ${error.message}`;
    }
}

// Приклад виклику функції:
//const postDataExample = {
//  title: 'foo',
////  body: 'bar',
////};

//postData('/posts', postDataExample)
// .then(data => console.log('Результат:', data))
//  .catch(err => console.error('Фінальна помилка:', err));


/*
 *
 * #3
 *
 * Функціональні вимоги:
 *
 * 1. Вхідні параметри:
 *  - `id`: Ідентифікатор об'єкта, який потрібно оновити.
 *  - `data`: Об'єкт з даними для оновлення.
 *
 * 2. Виконання запиту:
 *  - Виконати асинхронний HTTP PUT запит до `https://jsonplaceholder.typicode.com/posts/${id}` з використанням `id` та `data`.
 *  - Встановити заголовок `Content-Type: application/json`.
 * 3. Обробка відповідей:
 *  - У разі успішної відповіді, конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (наприклад, неіснуючий ресурс або проблеми з сервером), повернути повідомлення про помилку.
 *
 * 4. Логування:
 *  - Логувати у консоль результат або повідомлення про помилку.
 *
 * Технічні Вимоги:
 * - Використання асинхронних функцій (`async/await`) для обробки HTTP запитів.
 * - Належне управління помилками та відповідями від API.
 *
 */
async function putData(id, data) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {
        const response = await fetch(url, {
            method: 'PUT', // Використання методу PUT для оновлення даних
            headers: {
                'Content-Type': 'application/json', // Заголовок для JSON
            },
            body: JSON.stringify(data), // Перетворення даних у JSON формат
        });

        // Перевірка на успішний статус відповіді (HTTP статус 200-299)
        if (response.ok) {
            const updatedData = await response.json();
            console.log('Дані успішно оновлені:', updatedData); // Логування успішного результату
            return updatedData; // Повертаємо оновлені дані
        } else {
            console.error(`Помилка: HTTP статус ${response.status}`); // Логування помилки статусу
            return `Помилка: HTTP статус ${response.status}`;
        }
    } catch (error) {
        console.error('Помилка виконання запиту:', error.message); // Логування помилки запиту
        return `Помилка: ${error.message}`;
    }
}

// Приклад виклику функції:
//const updatedDataExample = {
// title: 'Updated Title',
// body: 'Updated content',
// userId: 1
//};

//putData(1, updatedDataExample)
//   .then(data => console.log('Результат:', data))
//  .catch(err => console.error('Фінальна помилка:', err));


/*
 *
 * #4
 * Функціональні вимоги:
 *
 * 1. Вхідні параметри:
 *  - `id`: Ідентифікатор об'єкта, який потрібно оновити.
 *  - `data`: Об'єкт з даними для оновлення.
 *
 * 2. Виконання запиту:
 *  - Виконати асинхронний HTTP PATCH запит до `https://jsonplaceholder.typicode.com/posts/${id}` з використанням `id` та `data`.
 *  - Встановити заголовок `Content-Type: application/json`.
 *
 * 3. Обробка відповідей:
 *  - У разі успішної відповіді, конвертувати відповідь у формат JSON і повернути отримані дані.
 *  - Якщо відповідь вказує на помилку (наприклад, неіснуючий ресурс або проблеми з сервером), повернути повідомлення про помилку.
 *
 * 4. Логування:
 *  - Логувати у консоль результат або повідомлення про помилку.
 *
 * Технічні Вимоги:
 * - Використання асинхронних функцій (`async/await`) для обробки HTTP запитів.
 * - Належне управління помилками та відповідями від API.
 *
 */

async function patchData(id, data) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {
        const response = await fetch(url, {
            method: 'PATCH', // Використання методу PATCH для часткового оновлення даних
            headers: {
                'Content-Type': 'application/json', // Заголовок для JSON
            },
            body: JSON.stringify(data), // Перетворення даних у формат JSON
        });

        // Перевірка на успішний статус відповіді (HTTP статус 200-299)
        if (response.ok) {
            const updatedData = await response.json();
            console.log('Дані успішно оновлені (PATCH):', updatedData); // Логування успішної відповіді
            return updatedData; // Повертаємо оновлені дані
        } else {
            console.error(`Помилка: HTTP статус ${response.status}`); // Логування помилки статусу
            return `Помилка: HTTP статус ${response.status}`;
        }
    } catch (error) {
        console.error('Помилка виконання запиту:', error.message); // Логування помилки запиту
        return `Помилка: ${error.message}`;
    }
}

// Приклад виклику функції:
// const partialUpdateData = {
//  title: 'Partially Updated Title'
// };

// patchData(1, partialUpdateData)
//   .then(data => console.log('Результат:', data))
//  .catch(err => console.error('Фінальна помилка:', err));


/*
 *
 * #5
 * Функціональні вимоги:
 *
 * 1. Вхідні дані:
 *  - Функція приймає один параметр id — ідентифікатор ресурсу, який потрібно видалити.
 *
 * 2. Запит на видалення:
 *  - Виконати асинхронний HTTP DELETE запит до API за адресою https://jsonplaceholder.typicode.com/posts/${id}, де ${id} замінюється на конкретний ідентифікатор ресурсу для видалення.
 *
 * 3. Обробка відповіді:
 *  - Якщо запит успішний (HTTP статус відповіді 200-299), логувати успішне повідомлення і повертати true.
 *  - У випадку отримання відповіді зі статусом, що вказує на помилку (все, що поза діапазоном 200-299), логувати помилку зі статусом і повертати сам статус помилки.
 *  - При виникненні помилки в процесі виконання запиту (наприклад, мережева помилка), логувати повідомлення про помилку і повертати текст помилки.
 *
 * 4. Логування:
 *  - Успішне видалення: Логувати повідомлення у консоль у форматі: "Post with id [id] has been successfully deleted.", де [id] — це ідентифікатор видаленого ресурсу.
 *  - Неуспішне видалення: Логувати повідомлення у консоль у форматі: "Failed to delete post with id [id]. Status: [status]", де [id] — ідентифікатор ресурсу, а [status] — HTTP статус відповіді.
 *  - Помилка виконання запиту: Логувати повідомлення у консоль у форматі: "Error during deletion: [error message]", де [error message] — текст помилки.
 *
 * Технічні вимоги:
 * - Використання асинхронних функцій (async/await) для обробки HTTP запитів.
 * - Забезпечити належну обробку помилок та відповідей від API.
 * - Функція повинна бути експортована для подальшого використання або тестування.
 *
 */

export async function deleteData(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE', // Використання методу DELETE для видалення ресурсу
        });

        // Перевірка на успішний статус відповіді (HTTP статус 200-299)
        if (response.ok) {
            console.log(`Post with id ${id} has been successfully deleted.`); // Логування успішного видалення
            return true; // Повертаємо true як індикатор успішного видалення
        } else {
            console.error(`Failed to delete post with id ${id}. Status: ${response.status}`); // Логування помилки статусу
            return response.status; // Повертаємо статус помилки
        }
    } catch (error) {
        console.error(`Error during deletion: ${error.message}`); // Логування помилки виконання запиту
        return `Error: ${error.message}`; // Повертаємо текст помилки
    }
}

deleteData(1)
    .then(result => {
        if (result === true) {
            console.log('Ресурс успішно видалено.');
        } else {
            console.error('Помилка:', result);
        }
    })
    .catch(error => console.error('Помилка:', error));
// Приклад виклику функції:


export {getData, postData, putData, patchData, deleteData}