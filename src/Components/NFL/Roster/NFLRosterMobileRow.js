import React from 'react';
import { baseUrl } from '../../../Constants/logos';
import { GetNFLOverall } from '../../../_Utility/RosterHelper';
import { HeightToFeetAndInches } from '../../../_Utility/utilHelper';

const NFLMobileRosterRow = ({ player, idx, userView, ts, canModify }) => {
    let modalTarget = `#playerModal${idx}`;
    let cutPlayerTarget = `#cutPlayer${idx}`;
    let extendPlayerTarget = `#extendPlayer${idx}`;
    let tradeBlockTarget = `#tradeBlock${idx}`;
    let practiceSquadTarget = `#practiceSquad${idx}`;
    let ovr = GetNFLOverall(player.Overall, player.Experience);
    const year = player.Experience === 0 ? 'R' : player.Experience;
    const heightObj = HeightToFeetAndInches(player.Height);
    const contract = player.Contract;
    const cutPlayerTitle = `Cut ${player.FirstName}`;
    const extendPlayerTitle = `Extend ${player.FirstName}`;
    const tradeBlockTitle = `Place ${player.FirstName} on the Trade Block.`;
    const practiceSquadTitle = `Place ${player.FirstName} on the Practice Squad`;

    const canCutOrPracticeSquad = userView && canModify;
    const canExtendPlayer =
        (ts.NFLWeek >= 15 || ts.NFLWeek === 0) && userView && canModify;
    const canTradeBlockPlayer = ts.NFLWeek <= 9 && userView && canModify;

    return (
        <>
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className="card-title">
                        {player.FirstName} {player.LastName}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {year === 'R' ? 'Rookie' : `${year} Year`}{' '}
                        {player.Archetype} {player.Position} from{' '}
                        {player.Hometown}, {player.State}
                    </h6>
                    <p className="card-text">
                        {heightObj.feet}' {heightObj.inches}", {player.Weight}{' '}
                        lbs
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Overall: {ovr}, Potential: {player.PotentialGrade}
                    </li>
                    <li className="list-group-item">
                        <button
                            type="button"
                            className="btn btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target={modalTarget}
                        >
                            <i className="bi bi-info-circle" /> Info
                        </button>
                    </li>
                    <li className="list-group-item">
                        Cut {player.LastName} |{' '}
                        {canCutOrPracticeSquad ? (
                            <button
                                type="button"
                                className="btn"
                                title={cutPlayerTitle}
                                data-bs-toggle="modal"
                                data-bs-target={cutPlayerTarget}
                            >
                                <img
                                    className="image-nfl-roster"
                                    src={`${baseUrl}/icons/cut_player.png`}
                                />
                            </button>
                        ) : (
                            'Unavailable'
                        )}
                    </li>
                    <li className="list-group-item">
                        Extend {player.LastName}'s Contract |{' '}
                        {canExtendPlayer ? (
                            <button
                                type="button"
                                className="btn"
                                title={extendPlayerTitle}
                                data-bs-toggle="modal"
                                data-bs-target={extendPlayerTarget}
                            >
                                <img
                                    className="image-nfl-roster"
                                    src={`${baseUrl}/icons/extend_contract.png`}
                                />
                            </button>
                        ) : (
                            'Unavailable'
                        )}
                    </li>
                    <li className="list-group-item">
                        Place {player.LastName} on Trade Block |{' '}
                        {canTradeBlockPlayer ? (
                            <button
                                type="button"
                                className="btn"
                                title={tradeBlockTitle}
                                data-bs-toggle="modal"
                                data-bs-target={tradeBlockTarget}
                            >
                                <img
                                    className="image-nfl-roster"
                                    src={`${baseUrl}/icons/trade_block.png`}
                                />
                            </button>
                        ) : (
                            'Unavailable'
                        )}
                    </li>
                    <li className="list-group-item">
                        Place {player.LastName} on PS |{' '}
                        {canCutOrPracticeSquad ? (
                            <button
                                type="button"
                                className="btn"
                                title={practiceSquadTitle}
                                data-bs-toggle="modal"
                                data-bs-target={practiceSquadTarget}
                            >
                                <img
                                    className="image-nfl-roster"
                                    src={`${baseUrl}/icons/practice_squad.png`}
                                />
                            </button>
                        ) : (
                            'Unavailable'
                        )}
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NFLMobileRosterRow;
