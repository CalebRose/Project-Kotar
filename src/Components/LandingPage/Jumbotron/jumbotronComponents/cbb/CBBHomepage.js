import React from 'react';
import { connect } from 'react-redux';
import { getLogo } from '../../../../../Constants/getLogo';
import StandingsTableRow from '../standingsTable/standingsTableRow';

const CBBHomePage = ({ currentUser }) => {
    let team =
        !!currentUser && !!currentUser.cbb_team ? currentUser.cbb_team : null;
    const logo = getLogo(team);

    const standingsRecords = [
        {
            team: 'Washington State',
            conferenceWins: 16,
            conferenceLosses: 0,
            totalWins: 24,
            totalLosses: 0
        },
        {
            team: "Saint Mary's",
            conferenceWins: 11,
            conferenceLosses: 5,
            totalWins: 16,
            totalLosses: 8
        },
        {
            team: 'New Mexico',
            conferenceWins: 10,
            conferenceLosses: 6,
            totalWins: 16,
            totalLosses: 8
        },
        {
            team: 'UC Irvine',
            conferenceWins: 9,
            conferenceLosses: 7,
            totalWins: 16,
            totalLosses: 8
        },
        {
            team: 'San Diego',
            conferenceWins: 8,
            conferenceLosses: 8,
            totalWins: 14,
            totalLosses: 10
        },
        {
            team: 'Oregon',
            conferenceWins: 6,
            conferenceLosses: 10,
            totalWins: 7,
            totalLosses: 17
        },
        {
            team: 'Seattle',
            conferenceWins: 1,
            conferenceLosses: 15,
            totalWins: 3,
            totalLosses: 21
        },
        {
            team: 'Portland',
            conferenceWins: 0,
            conferenceLosses: 16,
            totalWins: 0,
            totalLosses: 24
        }
    ];

    const standingsRow = standingsRecords.map((x, i) => {
        return <StandingsTableRow key={x.team} record={x} rank={i + 1} />;
    });
    return (
        <div>
            <div className="row mt-2">
                <div className="col-md-auto justify-content-start">
                    <h2>Washington State</h2>
                </div>
                <div className="col-3"></div>
                <div className="col-3"></div>
            </div>
            <div className="row mt-2">
                <div className="col-md-auto col-sm justify-content-start">
                    <h3>Pac 12 Conference, North Division</h3>
                </div>
                <div className="col-md-auto"></div>
                <div className="col-3"></div>
            </div>
            <div className="row mt-2">
                <div className="col-md-auto">
                    <div className="image me-2">
                        <img src={logo} alt="Go Cougs" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="row justify-content-start">
                        <h3 className="text-start">2021, Week 1</h3>
                    </div>
                    <div className="row">
                        <h4 className="text-start">Previous Week</h4>
                        <table class="table jumbotron-shadow rounded-3">
                            <thead>
                                <tr>
                                    <th scope="col">Game</th>
                                    <th scope="col">Home Team</th>
                                    <th scope="col">Home Points</th>
                                    <th scope="col">Away Points</th>
                                    <th scope="col">Away Team</th>
                                    <th scope="col">Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-success">
                                    <th scope="row">A</th>
                                    <td>Washington State</td>
                                    <td>69</td>
                                    <td>42</td>
                                    <td>Portland</td>
                                    <td>W</td>
                                </tr>
                                <tr className="table-success">
                                    <th scope="row">B</th>
                                    <td>UC Irving</td>
                                    <td>23</td>
                                    <td>89</td>
                                    <td>Washington State</td>
                                    <td>W</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row mt-2">
                        <h4 className="text-start">Current Week</h4>
                        <table class="table jumbotron-shadow rounded-3">
                            <thead>
                                <tr>
                                    <th scope="col">Game</th>
                                    <th scope="col">Home Team</th>
                                    <th scope="col"></th>
                                    <th scope="col">Away Team</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">A</th>
                                    <td>New Mexico</td>
                                    <td>vs</td>
                                    <td>Washington State</td>
                                </tr>
                                <tr>
                                    <th scope="row">B</th>
                                    <td>Washington State</td>
                                    <td>vs</td>
                                    <td>USC</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row mt-3">
                        <div className="btn-group">
                            <button
                                type="button"
                                class="btn btn-primary btn-md me-2 shadow"
                            >
                                Gameplan
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary btn-md me-2 shadow"
                            >
                                Recruiting
                            </button>
                            <button
                                type="button"
                                class="btn btn-primary btn-md shadow"
                            >
                                Stats
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-3 ms-md-auto">
                    <div className="row justify-content-start">
                        <h3 className="text-start">Standings</h3>
                        <table class="table jumbotron-shadow rounded-3">
                            <thead>
                                <tr>
                                    <th scope="col">Rank</th>
                                    <th scope="col">Team</th>
                                    <th scope="col">Conf Wins</th>
                                    <th scope="col">Conf Losses</th>
                                    <th scope="col">Total Wins</th>
                                    <th scope="col me-2">Total Losses</th>
                                </tr>
                            </thead>
                            <tbody>{standingsRow}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
    currentUser
});

export default connect(mapStateToProps)(CBBHomePage);