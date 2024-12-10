const readDatabase = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const database = req.app.locals.database;
            const fields = await readDatabase(database);

            let response = 'This is the list of our students\n';
            for (const [field, students] of Object.entries(fields).sort()) {
                response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
            }
            res.status(200).send(response.trim());
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        try {
            const { major } = req.params;
            if (major !== 'CS' && major !== 'SWE') {
                throw new Error('Major parameter must be CS or SWE');
            }

            const database = req.app.locals.database;
            const fields = await readDatabase(database);

            if (!fields[major]) {
                res.status(200).send('List:');
            } else {
                res.status(200).send(`List: ${fields[major].join(', ')}`);
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = StudentsController;
