import React, { useEffect, useState } from 'react';
import { RoundToTwoDecimals } from '../../../_Utility/utilHelper';
import {
    GetCapSpace,
    GetContractLength,
    GetTotalValue,
    GetYearlyValue,
    ValidateRule2,
    ValidateRule3,
    ValidateRule4,
    ValidateRule5
} from './FreeAgencyHelper';
import { OfferInput, TotalInput } from './FreeAgencyOfferInput';

export const FreeAgentOfferModal = ({ team, player, ts, idx, extend }) => {
    const modalId = `offerModal${idx}`;
    const name = `${player.FirstName} ${player.LastName}`;
    const [existingOffer, setExistingOffer] = useState(null);
    const [offer, setOffer] = useState(() => {
        const offers = player.Offers;
        const offerIdx = player.Offers.findIndex((x) => x.TeamID === team.ID);
        if (offerIdx < 0) {
            return {
                NFLPlayerID: player.ID,
                TeamID: team.ID,
                Team: team.TeamName + ' ' + team.Mascot
            };
        }
        setExistingOffer(() => offers[offerIdx]);
        return offers[offerIdx];
    });
    // Comment Here
    const [hasExistingOffer, setExistingOfferBool] = useState(false);
    const [validOffer, setValidOffer] = useState(false);
    const [rule1Valid, setRule1] = useState(true);
    const [rule2Valid, setRule2] = useState(true);
    const [rule3Valid, setRule3] = useState(true);
    const [rule4Valid, setRule4] = useState(true);
    const [rule5Valid, setRule5] = useState(true);
    const { MinimumValue } = player;

    const confirmChange = () => {
        return extend(player, offer);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (offer) {
            let off = { ...offer };
            off[name] = Number(value);

            ValidateOffer(off);
        }
    };

    const ValidateOffer = (offer) => {
        let BonusTotal = offer.TotalBonus;
        if (BonusTotal < 0) BonusTotal = 0;
        let y1Bonus = 0;
        let y2Bonus = 0;
        let y3Bonus = 0;
        let y4Bonus = 0;
        let y5Bonus = 0;
        const salary = GetTotalValue(
            offer.Y1BaseSalary,
            offer.Y2BaseSalary,
            offer.Y3BaseSalary,
            offer.Y4BaseSalary,
            offer.Y5BaseSalary
        );
        let contractLength = GetContractLength(
            offer.Y1BaseSalary,
            offer.Y2BaseSalary,
            offer.Y3BaseSalary,
            offer.Y4BaseSalary,
            offer.Y5BaseSalary
        );
        const bonusByYear = BonusTotal / contractLength;
        y1Bonus = contractLength > 0 ? bonusByYear : 0;
        y2Bonus = contractLength > 1 ? bonusByYear : 0;
        y3Bonus = contractLength > 2 ? bonusByYear : 0;
        y4Bonus = contractLength > 3 ? bonusByYear : 0;
        y5Bonus = contractLength > 4 ? bonusByYear : 0;
        const totalOverall = BonusTotal + salary;
        const capsheet = team.Capsheet;
        const y1Total = GetYearlyValue(y1Bonus, offer.Y1BaseSalary);
        const y2Total = GetYearlyValue(y2Bonus, offer.Y2BaseSalary);
        const y3Total = GetYearlyValue(y3Bonus, offer.Y3BaseSalary);
        const y4Total = GetYearlyValue(y4Bonus, offer.Y4BaseSalary);
        const y5Total = GetYearlyValue(y5Bonus, offer.Y5BaseSalary);
        const y1Value = y1Bonus * 1 + offer.Y1BaseSalary * 0.8;
        const y2Value = y2Bonus * 0.9 + offer.Y2BaseSalary * 0.4;
        const y3Value = y3Bonus * 0.8 + offer.Y3BaseSalary * 0.2;
        const y4Value = y4Bonus * 0.7 + offer.Y4BaseSalary * 0.1;
        const y5Value = y5Bonus * 0.6 + offer.Y5BaseSalary * 0.05;
        const y1Space = GetCapSpace(
            ts.Y1Capspace,
            y1Bonus,
            capsheet.Y1BaseSalary,
            capsheet.Y1CapHit
        );
        const y2Space = GetCapSpace(
            ts.Y2Capspace,
            y2Bonus,
            capsheet.Y2BaseSalary,
            capsheet.Y2CapHit
        );
        const y3Space = GetCapSpace(
            ts.Y3Capspace,
            y3Bonus,
            capsheet.Y3BaseSalary,
            capsheet.Y3CapHit
        );
        const y4Space = GetCapSpace(
            ts.Y4Capspace,
            y4Bonus,
            capsheet.Y4BaseSalary,
            capsheet.Y4CapHit
        );
        const y5Space = GetCapSpace(
            ts.Y5Capspace,
            y5Bonus,
            capsheet.Y5BaseSalary,
            capsheet.Y5CapHit
        );
        const contractValue = GetTotalValue(
            y1Value,
            y2Value,
            y3Value,
            y4Value,
            y5Value
        );
        const updatedOffer = {
            ...offer,
            TotalBonus: BonusTotal,
            Y1Bonus: y1Bonus,
            Y2Bonus: y2Bonus,
            Y3Bonus: y3Bonus,
            Y4Bonus: y4Bonus,
            Y5Bonus: y5Bonus,
            TotalSalary: salary,
            TotalOverall: totalOverall,
            TotalY1: y1Total,
            TotalY2: y2Total,
            TotalY3: y3Total,
            TotalY4: y4Total,
            TotalY5: y5Total,
            ValueY1: y1Value,
            ValueY2: y2Value,
            ValueY3: y3Value,
            ValueY4: y4Value,
            ValueY5: y5Value,
            Y1Remaining: y1Space - y1Total,
            Y2Remaining: y2Space - y2Total,
            Y3Remaining: y3Space - y3Total,
            Y4Remaining: y4Space - y4Total,
            Y5Remaining: y5Space - y5Total,
            ContractValue: contractValue,
            ContractLength: contractLength
        };

        const isRule1Valid = contractLength > 0 && contractLength < 6;
        const isRule2Valid = ValidateRule2(
            contractLength,
            y1Total,
            y2Total,
            y3Total,
            y4Total,
            y5Total
        );

        const isRule3Valid = ValidateRule3(
            contractLength,
            y1Total,
            y2Total,
            y3Total,
            y4Total,
            y5Total
        );

        const isRule4Valid = ValidateRule4(
            contractLength,
            y1Total,
            y2Total,
            y3Total,
            y4Total,
            y5Total
        );

        const isRule5Valid = ValidateRule5(
            BonusTotal,
            totalOverall,
            ts.IsNFLOffSeason
        );

        const canMakeOffer =
            player.IsAcceptingOffers ||
            (player.IsNegotiating && hasExistingOffer);

        const validToExistingOffer = !existingOffer
            ? true
            : existingOffer.ContractValue <= contractValue;

        const isValid =
            contractValue > MinimumValue &&
            isRule1Valid &&
            isRule2Valid &&
            isRule3Valid &&
            isRule4Valid &&
            isRule5Valid &&
            canMakeOffer &&
            validToExistingOffer;

        setRule1(() => isRule1Valid);
        setRule2(() => isRule2Valid);
        setRule3(() => isRule3Valid);
        setRule4(() => isRule4Valid);
        setRule5(() => isRule5Valid);
        setValidOffer(() => isValid);
        setOffer(() => updatedOffer);
    };

    useEffect(() => {
        if (player) {
            GetTeamOffer(player.Offers);
            const offers = player.Offers;
            const offerIdx = player.Offers.findIndex(
                (x) => x.TeamID === team.ID
            );
            if (offerIdx > -1) {
                setExistingOfferBool(() => true);
                ValidateOffer(offers[offerIdx]);
            }
        }
    }, [player]);

    const GetTeamOffer = (offers) => {
        let teamOffer = offers.findIndex((x) => x.TeamID === team.ID);
        if (teamOffer > -1) {
            setOffer(() => offers[teamOffer]);
        }
    };

    return (
        <div
            className="modal fade"
            id={modalId}
            tabindex="-1"
            aria-labelledby="extendPlayerModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="redshirtModalLabel">
                            {team.TeamName}: Make Offer to {name},{' '}
                            {player.Experience} Year {player.Archetype}{' '}
                            {player.Position}
                        </h4>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-auto">
                                <h4 className="">
                                    {player.Height} inches, {player.Weight} lbs
                                </h4>
                            </div>
                            <div className="col-md-auto">
                                <h4 className="">Overall: {player.Overall}</h4>
                            </div>
                            <div className="col-md-auto ms-auto">
                                <h4 className="">
                                    Contract Length: {offer.ContractLength}{' '}
                                    Years
                                </h4>
                            </div>
                            <div className="col-md-auto ms-auto">
                                <h4 className="">
                                    Minimum Value: ${MinimumValue}M
                                </h4>
                            </div>
                        </div>
                        <div className="row text-start text-small">
                            <div className="row text-start text-small">
                                <h5>Rules</h5>
                                <div className="row">
                                    <div className="col">
                                        <p
                                            className={
                                                !rule1Valid ? 'text-danger' : ''
                                            }
                                        >
                                            1: Contracts can only be between 1-5
                                            years
                                        </p>
                                        <p
                                            className={
                                                !rule3Valid ? 'text-danger' : ''
                                            }
                                        >
                                            3: Contracts cannot increase by more
                                            than 50% (or $3M) from year to year
                                        </p>
                                        <p
                                            className={
                                                !rule5Valid ? 'text-danger' : ''
                                            }
                                        >
                                            5: Before the draft, at least 30% of
                                            any contract must be bonus money.
                                            After the draft, bonus can be any
                                            amount, even 0%.
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p
                                            className={
                                                !rule2Valid ? 'text-danger' : ''
                                            }
                                        >
                                            2: Salary cannot decrease (but can
                                            remain flat)
                                        </p>
                                        <p
                                            className={
                                                !rule4Valid ? 'text-danger' : ''
                                            }
                                        >
                                            4: Highest year cannot be more than
                                            100% of the lowest year (or $6M)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2 text-start">
                            <h5>Bonus</h5>
                        </div>
                        <div className="row mt-1">
                            <TotalInput
                                name="Y1Bonus"
                                value={
                                    offer
                                        ? RoundToTwoDecimals(offer.Y1Bonus)
                                        : 0
                                }
                                change={handleInputChange}
                                label="Year 1 Bonus"
                            />
                            <TotalInput
                                name="Y2Bonus"
                                value={
                                    offer
                                        ? RoundToTwoDecimals(offer.Y2Bonus)
                                        : 0
                                }
                                change={handleInputChange}
                                label="Year 2 Bonus"
                            />
                            <TotalInput
                                name="Y3Bonus"
                                value={
                                    offer
                                        ? RoundToTwoDecimals(offer.Y3Bonus)
                                        : 0
                                }
                                change={handleInputChange}
                                label="Year 3 Bonus"
                            />
                            <TotalInput
                                name="Y4Bonus"
                                value={
                                    offer
                                        ? RoundToTwoDecimals(offer.Y4Bonus)
                                        : 0
                                }
                                change={handleInputChange}
                                label="Year 4 Bonus"
                            />
                            <TotalInput
                                name="Y5Bonus"
                                value={
                                    offer
                                        ? RoundToTwoDecimals(offer.Y5Bonus)
                                        : 0
                                }
                                change={handleInputChange}
                                label="Year 5 Bonus"
                            />
                            <OfferInput
                                name="TotalBonus"
                                value={offer ? offer.TotalBonus : 0}
                                change={handleInputChange}
                                label="Total Bonus"
                            />
                        </div>
                        <div className="row mt-1 text-start">
                            <h5>Salary</h5>
                        </div>
                        <div className="row mt-1">
                            <OfferInput
                                name="Y1BaseSalary"
                                value={offer.Y1BaseSalary}
                                change={handleInputChange}
                                label="Year 1 Salary"
                            />
                            <OfferInput
                                name="Y2BaseSalary"
                                value={offer.Y2BaseSalary}
                                change={handleInputChange}
                                label="Year 2 Salary"
                            />
                            <OfferInput
                                name="Y3BaseSalary"
                                value={offer.Y3BaseSalary}
                                change={handleInputChange}
                                label="Year 3 Salary"
                            />
                            <OfferInput
                                name="Y4BaseSalary"
                                value={offer.Y4BaseSalary}
                                change={handleInputChange}
                                label="Year 4 Salary"
                            />
                            <OfferInput
                                name="Y5BaseSalary"
                                value={offer.Y5BaseSalary}
                                change={handleInputChange}
                                label="Year 5 Salary"
                            />
                            <TotalInput
                                name="TotalSalary"
                                value={offer.TotalSalary}
                                change={handleInputChange}
                                label="Total Salary"
                            />
                        </div>
                        <div className="row mt-1 text-start">
                            <h5>Total</h5>
                        </div>
                        <div className="row mt-1">
                            <TotalInput
                                name="TotalY1"
                                value={RoundToTwoDecimals(offer.TotalY1)}
                                change={handleInputChange}
                                label="Total Year 1"
                                isTotal={true}
                            />
                            <TotalInput
                                name="TotalY2"
                                value={RoundToTwoDecimals(offer.TotalY2)}
                                change={handleInputChange}
                                label="Total Year 2"
                                isTotal={true}
                            />
                            <TotalInput
                                name="TotalY3"
                                value={RoundToTwoDecimals(offer.TotalY3)}
                                change={handleInputChange}
                                label="Total Year 3"
                                isTotal={true}
                            />
                            <TotalInput
                                name="TotalY4"
                                value={RoundToTwoDecimals(offer.TotalY4)}
                                change={handleInputChange}
                                label="Total Year 4"
                                isTotal={true}
                            />
                            <TotalInput
                                name="TotalY5"
                                value={RoundToTwoDecimals(offer.TotalY5)}
                                change={handleInputChange}
                                label="Total Year 5"
                                isTotal={true}
                            />
                            <TotalInput
                                name="TotalOverall"
                                value={RoundToTwoDecimals(offer.TotalOverall)}
                                change={handleInputChange}
                                label="Total Overall"
                                isTotal={true}
                            />
                        </div>
                        <div className="row mt-1 text-start">
                            <h5>Offer Value</h5>
                        </div>
                        <div className="row mt-1">
                            <TotalInput
                                name="ValueY1"
                                value={RoundToTwoDecimals(offer.ValueY1)}
                                change={handleInputChange}
                                label="Value Year 1"
                                isTotal={true}
                            />
                            <TotalInput
                                name="ValueY2"
                                value={RoundToTwoDecimals(offer.ValueY2)}
                                change={handleInputChange}
                                label="Value Year 2"
                                isTotal={true}
                            />
                            <TotalInput
                                name="ValueY3"
                                value={RoundToTwoDecimals(offer.ValueY3)}
                                change={handleInputChange}
                                label="Value Year 3"
                                isTotal={true}
                            />
                            <TotalInput
                                name="ValueY4"
                                value={RoundToTwoDecimals(offer.ValueY4)}
                                change={handleInputChange}
                                label="Value Year 4"
                                isTotal={true}
                            />
                            <TotalInput
                                name="ValueY5"
                                value={RoundToTwoDecimals(offer.ValueY5)}
                                change={handleInputChange}
                                label="Value Year 5"
                                isTotal={true}
                            />
                            <TotalInput
                                name="ContractValue"
                                value={RoundToTwoDecimals(offer.ContractValue)}
                                change={handleInputChange}
                                label="Contract Value"
                                isTotal={true}
                            />
                        </div>
                        <div className="row mt-1 text-start">
                            <h5>Cap Remaining</h5>
                        </div>
                        <div className="row mt-1">
                            <TotalInput
                                name="Y1Remaining"
                                value={RoundToTwoDecimals(offer.Y1Remaining)}
                                change={handleInputChange}
                                label="Cap Year 1"
                                isTotal={true}
                            />
                            <TotalInput
                                name="Y2Remaining"
                                value={RoundToTwoDecimals(offer.Y2Remaining)}
                                change={handleInputChange}
                                label="Cap Year 2"
                                isTotal={true}
                            />
                            <TotalInput
                                name="Y3Remaining"
                                value={RoundToTwoDecimals(offer.Y3Remaining)}
                                change={handleInputChange}
                                label="Cap Year 3"
                                isTotal={true}
                            />
                            <TotalInput
                                name="Y4Remaining"
                                value={RoundToTwoDecimals(offer.Y4Remaining)}
                                change={handleInputChange}
                                label="Cap Year 4"
                                isTotal={true}
                            />
                            <TotalInput
                                name="Y5Remaining"
                                value={RoundToTwoDecimals(offer.Y5Remaining)}
                                change={handleInputChange}
                                label="Cap Year 5"
                                isTotal={true}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            No
                        </button>
                        {validOffer ? (
                            !hasExistingOffer ? (
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                    onClick={confirmChange}
                                >
                                    Yes
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    data-bs-dismiss="modal"
                                    onClick={confirmChange}
                                >
                                    Update
                                </button>
                            )
                        ) : !hasExistingOffer ? (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                disabled
                            >
                                Yes
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                disabled
                            >
                                Update
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
