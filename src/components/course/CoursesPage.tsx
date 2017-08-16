import * as React from 'react';

interface ICoursesPageState {
    course: {
        title: string;
    }
}


class CoursesPage extends React.Component<any, ICoursesPageState> {
    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            course: {
                title: ''
            }
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event: React.FormEvent<HTMLInputElement>) {
        const course = this.state.course;
        course.title = event.currentTarget.value;
        this.setState({ course: course });
    }

    onClickSave(event: React.FormEvent<HTMLButtonElement>) {
        console.log('saving ', this.state.course.title);
    }


    render(): false | JSX.Element {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add course</h2>
                <div className="form-group">
                    <input type="text"
                        className="form-control input-sm"
                        onChange={this.onTitleChange}
                        value={this.state.course.title} />
                    <button
                        onClick={this.onClickSave}
                        className="btn btn-default btn-sm">Save</button>
                </div>
            </div>
        );
    }
}
export default CoursesPage;