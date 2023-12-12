const retrieveStudents = `SELECT * FROM students`;

const createStudent = `
    INSERT INTO students (name, qr_id, role, diplom_id) 
        VALUES ($1, $2, $3, $4) RETURNING id
`;

const retrieveStudent = `SELECT * FROM students WHERE diplom_id = $1`;

const retrieveStudentByQrId = `
                        select 
                            s.id, 
                            s.name, 
                            s.qr_id, 
                            s.images, 
                            s.role, 
                            s.diplom_id, 
                            d.name as diplom_name, 
                            d.description, 
                            d.images as diplom_images,
                            s.file_path, 
                            d.deadline 
                                from students s LEFT JOIN diplomas d ON s.diplom_id = d.id WHERE s.qr_id = $1`;

const retrieveStudentHimself = `SELECT * FROM students WHERE id = $1`;

const changeStudent = `UPDATE students SET name = $1, qr_id = $2, role = $3, diplom_id = $4 WHERE id = $5`;

const destroyStudent = `DELETE FROM students WHERE id =$1`;

const searchBy = "SELECT * FROM students WHERE qr_id ILIKE $1";

module.exports = {
  retrieveStudents,
  createStudent,
  retrieveStudent,
  retrieveStudentByQrId,
  retrieveStudentHimself,
  changeStudent,
  destroyStudent,
  searchBy,
};
