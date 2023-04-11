// Helper Functions
export const FilterFreeAgencyPlayers = (
    players,
    pos,
    archs,
    statuses,
    potentials
) => {
    let pr = [...players];

    if (pr.length > 0) {
        if (pos.length > 0) {
            pr = pr.filter((x) => pos.includes(x.Position));
        }
        if (archs.length > 0) {
            pr = pr.filter((x) => archs.includes(x.Archetype));
        }
        if (statuses.length > 0) {
            pr = pr.filter(
                (x) =>
                    (statuses.includes('Open') && x.IsAcceptingOffers) ||
                    (statuses.includes('Negotiating') && x.IsNegotiating)
            );
        }
        if (potentials.length > 0) {
            pr = pr.filter((x) => potentials.includes(x.PotentialGrade));
        }
    }

    return pr.slice(0);
};

export const GetTotalValue = (y1, y2, y3, y4, y5) => {
    let year1 = isNaN(y1) ? 0 : y1;
    let year2 = isNaN(y2) ? 0 : y2;
    let year3 = isNaN(y3) ? 0 : y3;
    let year4 = isNaN(y4) ? 0 : y4;
    let year5 = isNaN(y5) ? 0 : y5;
    return year1 + year2 + year3 + year4 + year5;
};
export const GetYearlyValue = (bonus, salary) => bonus + salary;

export const GetContractLength = (y1, y2, y3, y4, y5) => {
    if (isNaN(y1)) return 1;
    if (y5 > 0) return 5;
    if (y4 > 0) return 4;
    if (y3 > 0) return 3;
    if (y2 > 0) return 2;
    return 1;
};

export const GetCapSpace = (cap, bonus, salary, hit) => {
    return cap - bonus - salary - hit;
};

export const GetNBACapSpace = (cap, bonus, hit) => {
    return cap - bonus - hit;
};

export const GetProjectedCapsheet = (capsheet, offers) => {
    if (!offers || offers.length === 0) return capsheet;
    for (let i = 0; i < offers.length; i++) {
        capsheet.Y1Bonus += offers[i].Y1Bonus;
        capsheet.Y2Bonus += offers[i].Y2Bonus;
        capsheet.Y3Bonus += offers[i].Y3Bonus;
        capsheet.Y4Bonus += offers[i].Y4Bonus;
        capsheet.Y5Bonus += offers[i].Y5Bonus;
        capsheet.Y1Salary += offers[i].Y1BaseSalary;
        capsheet.Y2Salary += offers[i].Y2BaseSalary;
        capsheet.Y3Salary += offers[i].Y3BaseSalary;
        capsheet.Y4Salary += offers[i].Y4BaseSalary;
        capsheet.Y5Salary += offers[i].Y5BaseSalary;
    }
    return capsheet;
};

export const ValidateRule2 = (len, y1, y2, y3, y4, y5) => {
    if (len === 1) return true;
    let dif1 = y2 - y1;
    let dif2 = y3 - y2;
    let dif3 = y4 - y3;
    let dif4 = y5 - y4;
    let min = Infinity;
    if (len > 4) {
        min = Math.min(min, dif4);
    }
    if (len > 3) {
        min = Math.min(min, dif3);
    }
    if (len > 2) {
        min = Math.min(min, dif2);
    }
    if (len > 1) {
        min = Math.min(min, dif1);
    }
    return min >= 0;
};

export const ValidateRule3 = (len, y1, y2, y3, y4, y5) => {
    if (len === 1) return true;
    let dif1 = y2 / y1 - 1;
    let dif2 = y3 / y2 - 1;
    let dif3 = y4 / y3 - 1;
    let dif4 = y5 / y4 - 1;
    let max = Math.max(dif1, dif2, dif3, dif4);
    dif1 = y2 - y1;
    dif2 = y3 - y2;
    dif3 = y4 - y3;
    dif4 = y5 - y4;
    let maxB = Math.max(dif1, dif2, dif3, dif4);
    return max <= 0.5 || maxB <= 3;
};

export const ValidateRule4 = (len, y1, y2, y3, y4, y5) => {
    if (len === 1) return true;
    let max = Math.max(y1, y2, y3, y4, y5);
    let per1 = y1 / max;
    let per2 = y2 / max;
    let per3 = y3 / max;
    let per4 = y4 / max;
    let per5 = y5 / max;
    const dif1 = max - y1;
    const dif2 = max - y2;
    const dif3 = max - y3;
    const dif4 = max - y4;
    const dif5 = max - y5;
    let min = Infinity;
    let maxDiff = -Infinity;
    if (len > 4) {
        min = Math.min(min, per5);
        maxDiff = Math.max(maxDiff, dif5);
    }
    if (len > 3) {
        min = Math.min(min, per4);
        maxDiff = Math.max(maxDiff, dif4);
    }
    if (len > 2) {
        min = Math.min(min, per3);
        maxDiff = Math.max(maxDiff, dif3);
    }
    if (len > 1) {
        min = Math.min(min, per2);
        maxDiff = Math.max(maxDiff, dif2);
    }
    if (len > 0) {
        min = Math.min(min, per1);
        maxDiff = Math.max(maxDiff, dif1);
    }
    return min >= 0.5 || maxDiff <= 6;
};

export const ValidateRule5 = (bonus, total, isOffseason) => {
    if (!isOffseason) return true;
    return bonus / total >= 0.3;
};

export const ValidateRule6 = (s1, s2, s3, s4, s5) => {
    const arr = [s1, s2, s3, s4, s5];
    let valid = true;
    for (let i = 0; i < arr.length; i++) {
        const salary = arr[i];
        if (salary > 0) valid = salary >= 0.5;
        if (!valid) return valid;
    }
    return valid;
};

export const ValidateNBARule2 = (len, y1, y2, y3, y4, y5) => {
    if (len === 5 && y5 >= y4 && y4 >= y3 && y3 >= y2 && y2 >= y1) return true;
    if (len === 4 && y4 >= y3 && y3 >= y2 && y2 >= y1 && y5 === 0) return true;
    if (len === 3 && y3 >= y2 && y2 >= y1 && y4 === 0 && y5 === 0) return true;
    if (len === 2 && y2 >= y1 && y3 === 0 && y4 === 0 && y5 === 0) return true;
    if (len === 1 && y2 === 0 && y3 === 0 && y4 === 0 && y5 === 0) return true;
    return false;
};

export const ValidateNBARule3 = (len, y1, y2, y3, y4, y5) => {
    if (len === 1 && !y2 && !y3 && !y4 && !y5) return true;
    if (len === 2 && !y3 && !y4 && !y5 && !y1) return true;
    if (len === 3 && !y2 && !y4 && !y5 && !y1) return true;
    if (len === 4 && !y2 && !y3 && !y5 && !y1) return true;
    if (len === 5 && !y2 && !y4 && !y4 && !y1) return true;
    return false;
};

export const CheckForOffer = (player, teamID) => {
    if (player.Offers.length > 0) {
        const offerIdx = player.Offers.findIndex((x) => x.TeamID === teamID);
        if (offerIdx > -1) {
            return true;
        }
    }
    return false;
};

export const GetMaxPercentage = (year, isMax, isSupermax) => {
    if (!isMax && !isSupermax) return 0;
    if (isSupermax) {
        if (year > 9) {
            return 0.35;
        } else if (year > 6) {
            return 0.3;
        } else {
            return 0.25;
        }
    } else if (isMax) {
        if (year > 9) {
            return 0.3;
        } else if (year > 6) {
            return 0.25;
        } else {
            return 0.2;
        }
    }
};
