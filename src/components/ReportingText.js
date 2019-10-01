import React from 'react';

class ReportingText extends React.Component {
    render() {
        const { ReportedCount, TotalReports } = this.props;
        return (
            <p>You have completed {ReportedCount} of {TotalReports} reports for this period</p>
        );
    }
}

export default ReportingText;
