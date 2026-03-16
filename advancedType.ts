//15th case study
type Admin = {id : string, name : string, permission : "Basic" | "Advanced"};
type Instructor = {id: string, name: string, coursesTaught: number};

type InstructorOrAdmin = {role : Instructor | Admin}

type Assignment = {title : string, dueDate : Date, points : number}

type ReadonlyAssignments  = Readonly<Assignment>;

type learnerStats = {Quizes : number, Video : number, assignemnts : number};

type StatsAsString = {
    [K in keyof learnerStats] : string;
};