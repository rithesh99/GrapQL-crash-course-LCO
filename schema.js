import { buildSchema } from 'graphql'

const schema = buildSchema(`
    type Course {
        id: ID
        courseName: String
        category: String
        price: Int
        language: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssist]
    }

    type TeachingAssist {
        firstName: String
        lastName: String
        experience: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getCourse(id: ID): Course
    }

    input CourseInput{
        id: ID
        courseName: String!
        category: String
        price: Int!
        language: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssistInput]!
    }
    input TeachingAssistInput{
        firstName: String!
        lastName: String
        experience: Int
    }

    type Mutation {
        createCourse(input: CourseInput): Course
    }
`)

export default schema;

// type --- line 4
// custom datatype --- line 15
// enum --- line 21
// Query (getting data) --- line 27
// input ---line 31
// Mutation (setting data --- line 47
// ! --- Compulsory