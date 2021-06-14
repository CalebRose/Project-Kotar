export default class LocalStorageService {
    getRecruitingProfile() {
        return JSON.parse(sessionStorage.getItem('croots'));
    }

    setRecruitingProfile(payload) {
        sessionStorage.setItem('croots', JSON.stringify(payload));
    }

    getCFBTimestamp() {
        return JSON.parse(sessionStorage.getItem('cfb_timestamp'));
    }

    setCFBTimestamp(payload) {
        sessionStorage.setItem('cfb_timestamp', JSON.stringify(payload));
    }

    getCBBTimestamp() {
        return JSON.parse(sessionStorage.getItem('cbb_timestamp'));
    }

    setCBBTimestamp(payload) {
        sessionStorage.setItem('cbb_timestamp', JSON.stringify(payload));
    }
}
