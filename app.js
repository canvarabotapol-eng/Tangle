const songs = [
    { id: 1, songName: "Attention", artist: "Charlie Puth", file: "audio/1.mp3", search: "Charlie Puth Attention" },
    { id: 2, songName: "Ekki múkk", artist: "Sigur Rós", file: "audio/2.mp3", search: "Sigur Ros Ekki mukk" },
    { id: 3, songName: "My Moon My Man", artist: "Feist", file: "audio/3.mp3", search: "Feist My Moon My Man" },
    { id: 4, songName: "Beautiful Tango", artist: "Hindi Zahra", file: "audio/4.mp3", search: "Hindi Zahra Beautiful Tango" },
    { id: 5, songName: "Honeypie", artist: "JAWNY", file: "audio/5.mp3", search: "JAWNY Honeypie" },
    { id: 6, songName: "Mirrors Demo", artist: "Overtonight", file: "audio/6.mp3", search: "overtonight mirrors demo" },
    { id: 7, songName: "Love Me Not", artist: "Ravyn Lenae", file: "audio/7.mp3", search: "Ravyn Lenae Love Me Not" },
    { id: 8, songName: "Give Me Hints 2", artist: "s0rrow", file: "audio/8.mp3", search: "s0rrow give me hints 2" },
    { id: 9, songName: "Von", artist: "Sigur Rós", file: "audio/9.mp3", search: "Sigur Ros Von" },
    { id: 10, songName: "Glósóli", artist: "Sigur Rós", file: "audio/10.mp3", search: "Sigur Ros Glosoli" },
    { id: 11, songName: "Varðeldur", artist: "Sigur Rós", file: "audio/11.mp3", search: "Sigur Ros Vardeldur" },
    { id: 12, songName: "Dracula", artist: "Tame Impala & JENNIE", file: "audio/12.mp3", search: "Tame Impala JENNIE Dracula" },
    { id: 13, songName: "Starboy", artist: "The Weeknd feat. Daft Punk", file: "audio/13.mp3", search: "The Weeknd Daft Punk Starboy" },
    { id: 14, songName: "The Way I Are", artist: "Timbaland", file: "audio/14.mp3", search: "Timbaland The Way I Are" },
    { id: 15, songName: "Im So Blue For You 2", artist: "Zombiewebz", file: "audio/15.mp3", search: "Zombiewebz Im So Blue For You 2" },
        // Твои новые песни с 17-го номера
    { id: 16, songName: "Дайте танк (!)", artist: "Люди", file: "audio/Дайте танк (!)-Люди.mp3", search: "Дайте танк Люди" },
    { id: 17, songName: "Висели вместе", artist: "Дурной Вкус", file: "audio/Дурной Вкус – Висели вместе.mp3", search: "Дурной Вкус Висели вместе" },
    { id: 18, songName: "неудачник", artist: "ПОЛМАТЕРИ", file: "audio/ПОЛМАТЕРИ-я неудачник.mp3", search: "ПОЛМАТЕРИ неудачник" },
    { id: 19, songName: "Приходи и уходи", artist: "Убей_меня,_Эйс!", file: "audio/Убей_меня,_Эйс!_Приходи_и_уходи.mp3", search: "Убей меня Эйс Приходи и уходи" },
    { id: 20, songName: "Backroads 2", artist: "Earzilla", file: "audio/Earzilla - Backroads 2.mp3", search: "Earzilla Backroads 2" },
    { id: 21, songName: "I Suck", artist: "Gleb Korolev", file: "audio/Gleb Korolev - I Suck.mp3", search: "Gleb Korolev I Suck" },
    { id: 22, songName: "I Ve Kinda Lost My Hope 2", artist: "Gleb Korolev", file: "audio/Gleb Korolev - I Ve Kinda Lost My Hope 2.mp3", search: "Gleb Korolev I Ve Kinda Lost My Hope 2" },
    { id: 23, songName: "Paranoid 2", artist: "Ozzy Osbourne", file: "audio/Ozzy Osbourne - Paranoid 2.mp3", search: "Ozzy Osbourne Paranoid 2" },
    { id: 24, songName: "Alors on danse", artist: "Stromae", file: "audio/Stromae-Alors on danse.mp3", search: "Stromae Alors on danse" },
    { id: 25, songName: "Беги 2", artist: "Tulpaunika", file: "audio/Tulpaunika - Беги 2.mp3", search: "Tulpaunika Беги 2" }
];
// ===== ОФИЦИАЛЬНЫЕ ПЛЕЙЛИСТЫ ОТ САЙТА =====
const officialPlaylists = [
    {
        name: "Треки, когда тебя избила обезьяна",
        cover: "monkey.JPG", // Потом сможешь заменить на тематическую картинку
        songs: [
            20, // 21. Suck (Gleb Korolev) — начало, жесткий бит
            17, // 18. неудачник (ПОЛМАТЕРИ) — осознание
            5,  // 06. Mirrors Demo (Overtonight) — взгляд в зеркало
            16, // 17. Висели вместе (Дурной Вкус) — странное чувство
            24, // 25. Беги 2 (Tulpaunika) — кульминация, побег
            19, // 20. Backroads 2 (Earzilla) — путь домой
            21, // 22. I Ve Kinda Lost My Hope (Gleb Korolev) — потеря надежды
            22, // 23. Paranoid 2 (Ozzy Osbourne) — паранойя после нападения
            18, // 19. Приходи и уходи (Убей меня, Эйс!) — принятие абсурда
            15  // 16. Люди (Дайте танк) — философский финал
        ]
    }
];

let songIndex = 0;
let music = new Audio(songs[songIndex].file);
let currentLoggedUser = ""; 
let currentLikedSongs = []; 
let lastListeningIndex = null;

let menuSongList = document.getElementById("menuSongList");
let popularSongList = document.getElementById("popularSongList");
let masterPlay = document.getElementById("masterPlay");
let mainPlayBtn = document.getElementById("mainPlayBtn");
let back = document.getElementById("back");
let next = document.getElementById("next");
let title = document.getElementById("title");
let mainTitle = document.getElementById("mainTitle");
let mainSubtitle = document.getElementById("mainSubtitle");
let posterMasterPlay = document.getElementById("poster_master_play");
let wave = document.getElementById("wave");
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementById("dot");
let vol = document.getElementById("vol");
let volBar = document.getElementById("vol_bar");
let volDot = document.getElementById("vol_dot");
let volIcon = document.getElementById("vol_icon");
const defaultCover = "logo.png";

// ==== ВАЖНО: Сначала объявляем кнопку лайка! ====
const likeBtn = document.getElementById("likeBtn");

songs.forEach(song => { song.cover = defaultCover; });

// Функция обновления сердечка
function updateLikeButtonUI() {
    if (!likeBtn) return;
    if (currentLikedSongs.includes(songIndex)) {
        likeBtn.innerHTML = 'LIKED <i class="bi bi-heart-fill"></i>';
        likeBtn.style.background = '#7B2FFF ';
        likeBtn.style.color = '#fff';
    } else {
        likeBtn.innerHTML = 'LIKE <i class="bi bi-heart"></i>';
        likeBtn.style.background = 'none';
        likeBtn.style.color = '#7B2FFF ';
    }
}

function renderSongs() {
    menuSongList.innerHTML = "";
    popularSongList.innerHTML = "";
    songs.forEach((song, index) => {
        let number = index + 1;
        let normalNumber = number < 10 ? "0" + number : number;
        menuSongList.innerHTML += `
            <li class="songItem" data-index="${index}">
                <span>${normalNumber}</span>
                <img src="${song.cover}" alt="${song.songName}" class="song-cover">
                <h5>${song.songName}<div class="subtitle">${song.artist}</div></h5>
                <i class="bi playListPlay bi-play-circle-fill" data-index="${index}"></i>
            </li>`;
        popularSongList.innerHTML += `
            <li class="songItem" data-index="${index}">
                <div class="img_play">
                    <img src="${song.cover}" alt="${song.songName}" class="song-cover">
                    <i class="bi playListPlay bi-play-circle-fill" data-index="${index}"></i>
                </div>
                <h5>${song.songName}<br><div class="subtitle">${song.artist}</div></h5>
            </li>`;
    });
    addSongClickEvents();
}

function addSongClickEvents() {
    let allSongItems = document.querySelectorAll(".songItem");
    let allPlayButtons = document.querySelectorAll(".playListPlay");
    allSongItems.forEach(item => {
        item.addEventListener("click", function () {
            songIndex = Number(this.dataset.index);
            loadSong();
            playMusic();
        });
    });
    allPlayButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            let clickedIndex = Number(this.dataset.index);
            if (songIndex === clickedIndex && !music.paused) {
                pauseMusic();
            } else {
                songIndex = clickedIndex;
                loadSong();
                playMusic();
            }
        });
    });
}

async function loadCoversFromInternet() {
    for (let song of songs) {
        try {
            // 1. Загружаем обложки
            let query = encodeURIComponent(song.search);
            let response = await fetch(`https://itunes.apple.com/search?term=${query}&media=music&entity=song&limit=1`);
            let data = await response.json();
            if (data.results && data.results.length > 0 && data.results[0].artworkUrl100) {
                song.cover = data.results[0].artworkUrl100.replace("100x100bb", "600x600bb");
            }

            // 2. СКАНИРУЕМ ДЛИТЕЛЬНОСТЬ В ФОНЕ
            // Создаем невидимый аудиоплеер для каждой песни, чтобы узнать её время
            let tempAudio = new Audio(song.file);
            tempAudio.addEventListener('loadedmetadata', function() {
                song.duration = tempAudio.duration; // Сохраняем время
                
                // Если плейлист сейчас открыт, обновляем время на экране
                let timeSpan = document.querySelector(`.songItem[onclick="playFromPlaylist(${songs.indexOf(song)})"] .track-time`);
                if (timeSpan && song.duration) {
                    timeSpan.innerText = formatTime(song.duration);
                }
            });
            
        } catch (error) { 
            song.cover = defaultCover; 
        }
    }
    renderSongs();
    updateSongInfo();
}

function loadSong() {
    music.src = songs[songIndex].file;
    updateSongInfo();
    
    // Как только аудио загрузится, сохраняем его длительность в массив songs
    music.addEventListener('loadedmetadata', function() {
        songs[songIndex].duration = music.duration;
    }, { once: true });
}

function updateSongInfo() {
    title.innerHTML = `${songs[songIndex].songName}<br><div class="subtitle">${songs[songIndex].artist}</div>`;
    mainTitle.innerText = songs[songIndex].songName;
    mainSubtitle.innerHTML = `${songs[songIndex].artist}<br>Выбери трек и нажми PLAY`;
    posterMasterPlay.src = songs[songIndex].cover;
    updateLikeButtonUI(); 
}

function resetAllPlayButtons() {
    let allPlayButtons = document.querySelectorAll(".playListPlay");
    allPlayButtons.forEach(button => {
        button.classList.remove("bi-pause-circle-fill");
        button.classList.add("bi-play-circle-fill");
    });
}

function playMusic() {
    lastListeningIndex = songIndex;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    mainPlayBtn.innerText = "PAUSE";
    wave.classList.add("active2");
    resetAllPlayButtons();
    let currentButtons = document.querySelectorAll(`.playListPlay[data-index="${songIndex}"]`);
    currentButtons.forEach(button => {
        button.classList.remove("bi-play-circle-fill");
        button.classList.add("bi-pause-circle-fill");
    });
}

function pauseMusic() {
    music.pause();
    masterPlay.classList.remove("bi-pause-fill");
    masterPlay.classList.add("bi-play-fill");
    mainPlayBtn.innerText = "PLAY";
    wave.classList.remove("active2");
    resetAllPlayButtons();
}

masterPlay.addEventListener("click", () => { if (music.paused) playMusic(); else pauseMusic(); });
mainPlayBtn.addEventListener("click", () => { if (music.paused) playMusic(); else pauseMusic(); });
next.addEventListener("click", () => { songIndex++; if (songIndex >= songs.length) songIndex = 0; loadSong(); playMusic(); });
back.addEventListener("click", () => { songIndex--; if (songIndex < 0) songIndex = songs.length - 1; loadSong(); playMusic(); });

music.addEventListener("timeupdate", function () {
    let musicCurrent = music.currentTime;
    let musicDuration = music.duration;
    if (!isNaN(musicDuration)) {
        let progressBar = parseInt((musicCurrent / musicDuration) * 100);
        seek.value = progressBar;
        bar2.style.width = progressBar + "%";
        dot.style.left = progressBar + "%";
        let minDuration = Math.floor(musicDuration / 60);
        let secDuration = Math.floor(musicDuration % 60);
        if (secDuration < 10) secDuration = "0" + secDuration;
        currentEnd.innerText = `${minDuration}:${secDuration}`;
    }
    let minCurrent = Math.floor(musicCurrent / 60);
    let secCurrent = Math.floor(musicCurrent % 60);
    if (secCurrent < 10) secCurrent = "0" + secCurrent;
    currentStart.innerText = `${minCurrent}:${secCurrent}`;
});

seek.addEventListener("change", () => { music.currentTime = seek.value * music.duration / 100; });

vol.addEventListener("change", function () {
    music.volume = vol.value / 100;
    volBar.style.width = vol.value + "%";
    volDot.style.left = vol.value + "%";
    if (vol.value == 0) {
        volIcon.classList.remove("bi-volume-down-fill");
        volIcon.classList.add("bi-volume-mute-fill");
    } else {
        volIcon.classList.remove("bi-volume-mute-fill");
        volIcon.classList.add("bi-volume-down-fill");
    }
});

music.addEventListener("ended", () => { songIndex++; if (songIndex >= songs.length) songIndex = 0; loadSong(); playMusic(); });

let leftScroll = document.getElementById("left_scroll");
let rightScroll = document.getElementById("right_scroll");
rightScroll.addEventListener("click", () => { popularSongList.scrollLeft += 330; });
leftScroll.addEventListener("click", () => { popularSongList.scrollLeft -= 330; });

renderSongs();
updateSongInfo();
loadCoversFromInternet();
renderPlaylists(); 

let searchInput = document.getElementById("searchInput");
let searchResult = document.getElementById("searchResult");

function searchSong() {
    let searchText = searchInput.value.toLowerCase().trim();
    let allSongItems = document.querySelectorAll(".songItem");
    if (searchText === "") {
        allSongItems.forEach(item => { item.style.display = ""; });
        searchResult.style.display = "none";
        return;
    }
    let foundSongs = songs.filter(song => song.songName.toLowerCase().includes(searchText) || song.artist.toLowerCase().includes(searchText));
    allSongItems.forEach(item => {
        let index = Number(item.dataset.index);
        let song = songs[index];
        let isMatch = song.songName.toLowerCase().includes(searchText) || song.artist.toLowerCase().includes(searchText);
        item.style.display = isMatch ? "" : "none";
    });
    if (foundSongs.length > 0) {
        searchResult.innerText = "Найдено: " + foundSongs[0].songName;
        searchResult.classList.remove("error"); searchResult.classList.add("success");
        searchResult.style.display = "block";
    } else {
        searchResult.innerText = "Такой песни нет :(";
        searchResult.classList.remove("success"); searchResult.classList.add("error");
        searchResult.style.display = "block";
    }
}
searchInput.addEventListener("input", searchSong);
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let searchText = searchInput.value.toLowerCase().trim();
        let foundIndex = songs.findIndex(song => song.songName.toLowerCase().includes(searchText) || song.artist.toLowerCase().includes(searchText));
        if (foundIndex !== -1) { songIndex = foundIndex; loadSong(); playMusic(); }
    }
});

// ===== ЛОГИКА ЛАЙКОВ =====
async function loadUserLikes() {
    if (!currentLoggedUser) return;
    try {
        const response = await fetch(`https://tangle-e5fj.onrender.com/api/likes/${currentLoggedUser}`);
        currentLikedSongs = await response.json();
        updateLikeButtonUI();
    } catch (e) { console.log("Ошибка загрузки лайков"); }
}

if (likeBtn) {
    likeBtn.addEventListener("click", async () => {
        if (!currentLoggedUser) {
            alert("Сначала войдите в аккаунт!");
            return;
        }
        try {
            const response = await fetch('https://tangle-e5fj.onrender.com/api/like', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: currentLoggedUser, songIndex: songIndex })
            });
            const data = await response.json();
            if (data.liked) {
                currentLikedSongs.push(songIndex);
            } else {
                currentLikedSongs = currentLikedSongs.filter(i => i !== songIndex);
            }
            updateLikeButtonUI();
        } catch (e) { alert("Ошибка соединения"); }
    });
}

// ===== МЕНЮ =====
let playlistBtn = document.getElementById("playlistBtn");
let lastListeningBtn = document.getElementById("lastListeningBtn");
let recommendedBtn = document.getElementById("recommendedBtn");

function setActiveMenuButton(activeButton) {
    playlistBtn.classList.remove("active"); lastListeningBtn.classList.remove("active"); recommendedBtn.classList.remove("active");
    activeButton.classList.add("active");
}
function showSongsByIndexes(indexes) {
    let allSongItems = document.querySelectorAll(".songItem");
    allSongItems.forEach(item => {
        let index = Number(item.dataset.index);
        item.style.display = indexes.includes(index) ? "" : "none";
    });
}
playlistBtn.addEventListener("click", () => { setActiveMenuButton(playlistBtn); document.querySelectorAll(".songItem").forEach(item => { item.style.display = ""; }); });
lastListeningBtn.addEventListener("click", () => {
    setActiveMenuButton(lastListeningBtn);
    if (lastListeningIndex === null) { alert("Ты пока ещё не слушала песни :)"); return; }
    showSongsByIndexes([lastListeningIndex]);
});
recommendedBtn.addEventListener("click", () => { setActiveMenuButton(recommendedBtn); showSongsByIndexes([0, 3, 6, 12]); });

let discoverBtn = document.getElementById("discoverBtn");
let libraryBtn = document.getElementById("libraryBtn");
let radioBtn = document.getElementById("radioBtn");
function setActiveTopMenu(activeBtn) {
    discoverBtn.style.color = "#4c5262"; libraryBtn.style.color = "#4c5262"; radioBtn.style.color = "#4c5262"; activeBtn.style.color = "#fff";
}
discoverBtn.addEventListener("click", () => { setActiveTopMenu(discoverBtn); document.querySelectorAll(".songItem").forEach(item => { item.style.display = ""; }); if (searchResult) searchResult.style.display = "none"; });

libraryBtn.addEventListener("click", async () => {
    setActiveTopMenu(libraryBtn);
    
    if (!currentLoggedUser) {
        showSongsByIndexes([0, 6, 12, 3]);
        if (searchResult) {
            searchResult.innerText = "Войдите, чтобы увидеть свою библиотеку";
            searchResult.classList.add("success");
            searchResult.style.display = "block";
        }
        return;
    }

    if (currentLikedSongs.length === 0) {
        if (searchResult) {
            searchResult.innerText = "Вы пока не лайкнули ни одной песни :(";
            searchResult.classList.add("error");
            searchResult.style.display = "block";
        }
        document.querySelectorAll(".songItem").forEach(item => { item.style.display = "none"; });
    } else {
        showSongsByIndexes(currentLikedSongs);
        if (searchResult) {
            searchResult.innerText = "Моя библиотека";
            searchResult.classList.remove("error");
            searchResult.classList.add("success");
            searchResult.style.display = "block";
        }
    }
});

radioBtn.addEventListener("click", () => {
    setActiveTopMenu(radioBtn);
    if (searchResult) { searchResult.innerText = "Упс, пока не доступно :)"; searchResult.classList.remove("success"); searchResult.classList.add("error"); searchResult.style.display = "block"; }
});

// ===== АВТОРИЗАЦИЯ =====
const authOverlay = document.getElementById("authOverlay");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const authMessage = document.getElementById("authMessage");

function showAuthMessage(text, isError) {
    authMessage.innerText = text;
    authMessage.style.color = isError ? "#ff6b6b" : "#7B2FFF ";
}

registerBtn.addEventListener("click", async function () {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (!username || !password) { showAuthMessage("Заполните все поля!", true); return; }
    try {
        const response = await fetch('https://tangle-e5fj.onrender.com/api/register', {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok) { showAuthMessage("Успех! Теперь нажмите Войти.", false); }
        else { showAuthMessage(data.error, true); }
    } catch (error) { showAuthMessage("Ошибка подключения к серверу", true); }
});
loginBtn.addEventListener("click", async function () {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    if (!username || !password) { showAuthMessage("Введите ник и пароль!", true); return; }
    try {
        const response = await fetch('https://tangle-e5fj.onrender.com/api/login', {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok) {
            authOverlay.classList.add("hidden");
            currentLoggedUser = username; 
            localStorage.setItem("savedUser", username); 
            document.getElementById("userAvatar").title = username;
              // === ДОБАВЬ ЭТОТ БЛОК ===
            try {
                const profRes = await fetch(`https://tangle-e5fj.onrender.com/api/profile/${username}`);
                const profData = await profRes.json();
                if (profRes.ok && profData.avatar) {
                    document.getElementById("userAvatar").src = `https://tangle-e5fj.onrender.com${profData.avatar}`;
                }
            } catch (e) { console.log("Ошибка загрузки аватарки"); }
            // ==========================
            loadUserLikes(); 
            loadMyMusic(); // <--- ВОТ ЭТА СТРОЧКА ДОБАВЛЕНА
        } else {
            showAuthMessage(data.error, true);
        }
    } catch (error) { showAuthMessage("Ошибка подключения к серверу", true); }
});

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => { 
    localStorage.removeItem("savedUser"); location.reload(); });
}

// ===== ЛОГИКА ПРОФИЛЯ =====
const profileModal = document.getElementById("profileModal");
const userAvatar = document.getElementById("userAvatar");
const closeProfileBtn = document.getElementById("closeProfileBtn");
const profileAvatar = document.getElementById("profileAvatar");
const profileDisplayName = document.getElementById("profileDisplayName");
const profileBio = document.getElementById("profileBio");
const editProfileBtn = document.getElementById("editProfileBtn");
const editForm = document.getElementById("editForm");
const avatarUpload = document.getElementById("avatarUpload");
const saveProfileBtn = document.getElementById("saveProfileBtn");

if (userAvatar) {
    userAvatar.addEventListener("click", async () => {
        if (!currentLoggedUser) return;
        profileModal.classList.remove("hidden");
        try {
            const response = await fetch(`https://tangle-e5fj.onrender.com/api/profile/${currentLoggedUser}`);
            const data = await response.json();
            if (response.ok) {
                profileDisplayName.innerText = data.display_name || data.username;
                profileBio.innerText = data.bio || "Описание пока нет...";
                if (data.avatar) {
                    profileAvatar.src = `https://tangle-e5fj.onrender.com${data.avatar}`;
                    userAvatar.src = `https://tangle-e5fj.onrender.com${data.avatar}`;
                }
            }
        } catch (e) { console.log("Ошибка загрузки профиля"); }
    });
}

if (closeProfileBtn) {
    closeProfileBtn.addEventListener("click", () => {
        profileModal.classList.add("hidden");
        editForm.classList.add("hidden");
    });
}

if (editProfileBtn) {
    editProfileBtn.addEventListener("click", () => {
        editForm.classList.toggle("hidden");
        if (!editForm.classList.contains("hidden")) {
            document.getElementById("editDisplayName").value = profileDisplayName.innerText === "Описание пока нет..." ? "" : profileDisplayName.innerText;
            document.getElementById("editBio").value = profileBio.innerText === "Описание пока нет..." ? "" : profileBio.innerText;
        }
    });
}

if (saveProfileBtn) {
    saveProfileBtn.addEventListener("click", async () => {
        const displayName = document.getElementById("editDisplayName").value.trim();
        const bio = document.getElementById("editBio").value.trim();
        const formData = new FormData();
        formData.append("username", currentLoggedUser);
        formData.append("display_name", displayName);
        formData.append("bio", bio);
        if (avatarUpload.files[0]) { formData.append("avatar", avatarUpload.files[0]); }

        try {
            const response = await fetch('https://tangle-e5fj.onrender.com/api/update-profile', {
                method: 'POST', body: formData
            });
            if (response.ok) {
                profileDisplayName.innerText = displayName || currentLoggedUser;
                profileBio.innerText = bio || "Описание пока нет...";
                if (avatarUpload.files[0]) { userAvatar.src = URL.createObjectURL(avatarUpload.files[0]); }
                editForm.classList.add("hidden");
                alert("Профиль сохранен!");
            }
        } catch (e) { alert("Ошибка сохранения"); }
    });
}
// ===== ДОБАВЛЕНИЕ СВОЕЙ МУЗЫКИ =====
const addMusicBtn = document.getElementById("addMusicBtn");
const uploadModal = document.getElementById("uploadModal");
const closeUploadBtn = document.getElementById("closeUploadBtn");
const saveSongBtn = document.getElementById("saveSongBtn");

if (addMusicBtn) {
    addMusicBtn.addEventListener("click", () => {
        if (!currentLoggedUser) {
            alert("Войдите в аккаунт, чтобы добавлять музыку!");
            return;
        }
        uploadModal.classList.remove("hidden");
    });
}

if (closeUploadBtn) {
    closeUploadBtn.addEventListener("click", () => {
        uploadModal.classList.add("hidden");
    });
}

if (saveSongBtn) {
    saveSongBtn.addEventListener("click", async () => {
        const songName = document.getElementById("uploadSongName").value.trim() || "Без названия";
        const artist = document.getElementById("uploadArtistName").value.trim() || "Неизвестный";
        const fileInput = document.getElementById("audioFile");

        if (!fileInput.files[0]) {
            alert("Выберите файл!");
            return;
        }

        const formData = new FormData();
        formData.append("username", currentLoggedUser);
        formData.append("songName", songName);
        formData.append("artist", artist);
        formData.append("audio", fileInput.files[0]);

        try {
            saveSongBtn.innerText = "Загрузка...";
            const response = await fetch('https://tangle-e5fj.onrender.com/api/upload-music', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert("Музыка успешно добавлена!");
                uploadModal.classList.add("hidden");
                // Очищаем поля
                document.getElementById("uploadSongName").value = "";
                document.getElementById("uploadArtistName").value = "";
                fileInput.value = "";
                
                // Тут в будущем мы добавим обновление списка песен в библиотеке
            } else {
                alert("Ошибка загрузки");
            }
        } catch (e) {
            alert("Ошибка соединения с сервером");
        } finally {
            saveSongBtn.innerText = "ЗАГРУЗИТЬ";
        }
    });
}
// ===== ЗАГРУЗКА СВОЕЙ МУЗЫКИ НА САЙТ =====

async function loadMyMusic() {
    if (!currentLoggedUser) return;

    try {
        const response = await fetch(`https://tangle-e5fj.onrender.com/api/my-music/${currentLoggedUser}`);
        const mySongs = await response.json();

        // Проходимся по загруженным песням
        mySongs.forEach((song) => {
            // Проверяем, нет ли уже этой песни в основном массиве (чтобы не дублировать)
            const alreadyExists = songs.find(s => s.file === `https://tangle-e5fj.onrender.com${song.file_path}`);
            
            if (!alreadyExists) {
                // Добавляем загруженную песню в ГЛАВНЫЙ массив songs
                songs.push({
                    id: songs.length + 1,
                    songName: song.song_name,
                    artist: song.artist,
                    file: `https://tangle-e5fj.onrender.com${song.file_path}`, // Ссылка на сервер
                    search: song.song_name, // Для поиска
                    cover: "logo.png" // Своей обложки нет, ставим лого
                });
            }
        });

        // Теперь, когда массив songs обновлен, просто перерисовываем весь список!
        renderSongs();
        updateSongInfo(); // Обновляем инфу текущей песни

    } catch (e) {
        console.error("Ошибка загрузки моей музыки:", e);
    }
}
// ===== ПРОВЕРКА СЕССИИ ПРИ ЗАГРУЗКЕ =====
window.addEventListener("load", async () => {
    const savedUser = localStorage.getItem("savedUser");

    if (savedUser) {
        // ЕСЛИ НИК ЕСТЬ (ты уже вошла)
        currentLoggedUser = savedUser;
        
        // Загружаем аватарку
        try {
            const response = await fetch(`https://tangle-e5fj.onrender.com/api/profile/${savedUser}`);
            const data = await response.json();
            if (response.ok && data.avatar) {
                document.getElementById("userAvatar").src = `https://tangle-e5fj.onrender.com${data.avatar}`;
            }
        } catch (e) { console.log("Ошибка загрузки аватарки"); }

        // Скрываем окно (на всякий случай, если оно вдруг открылось)
        authOverlay.classList.add("hidden");
        document.getElementById("userAvatar").title = savedUser;
        
        loadUserLikes();
        loadMyMusic();
        loadUserPlaylists(); // <-- Добавь это
    } else {
        // ЕСЛИ НИКА НЕТ (ты не вошла или вышла)
        // Принудительно показываем окно входа
        authOverlay.classList.remove("hidden");
    }
});
// ===== СИСТЕМА ДРУЗЕЙ =====

// 1. Пинг (отправляем серверу сигнал "я онлайн" каждые 10 секунд)
if (currentLoggedUser) {
    setInterval(() => {
        fetch('https://tangle-e5fj.onrender.com/api/ping', {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: currentLoggedUser })
        });
    }, 10000);
}

// 2. Открытие окна друзей
// ===== СИСТЕМА ДРУЗЕЙ =====
const friendsBtn = document.getElementById("friendsBtn");
const friendsModal = document.getElementById("friendsModal");
const closeFriendsBtn = document.getElementById("closeFriendsBtn");
const usersList = document.getElementById("usersList");
const tabAllUsers = document.getElementById("tabAllUsers");
const tabMyFriends = document.getElementById("tabMyFriends");
const tabRequests = document.getElementById("tabRequests");
const reqCount = document.getElementById("reqCount");

if (friendsBtn) {
    friendsBtn.addEventListener("click", () => {
        if (!currentLoggedUser) { alert("Войдите в аккаунт!"); return; }
        friendsModal.classList.remove("hidden");
        loadAllUsers();
        checkRequests(); // Проверяем наличие заявок при открытии
    });
}
if (closeFriendsBtn) closeFriendsBtn.addEventListener("click", () => friendsModal.classList.add("hidden"));

// Функция для переключения вкладок
function setTab(activeTab) {
    [tabAllUsers, tabMyFriends, tabRequests].forEach(t => {
        t.style.background = "none"; t.style.color = "#7B2FFF";
    });
    activeTab.style.background = "#7B2FFF"; activeTab.style.color = "#fff";
}

// 1. ЗАГРУЗКА ВСЕХ ПОЛЬЗОВАТЕЛЕЙ
async function loadAllUsers() {
    setTab(tabAllUsers);
    usersList.innerHTML = "Загрузка...";

    const response = await fetch(`https://tangle-e5fj.onrender.com/api/all-users/${currentLoggedUser}`);
    const users = await response.json();
    
    usersList.innerHTML = "";
    users.forEach(u => {
        let onlineDot = u.is_online === 1 ? '<span style="color: #7B2FFF ;">●</span> Онлайн' : '<span style="color: gray;">●</span> Офлайн';
        
        // Логика кнопок в зависимости от статуса
        let actionBtn = "";
        if (u.is_friend) {
            actionBtn = `<button onclick="removeFriend('${u.username}')" style="background: none; border: 1px solid #ff6b6b; color: #ff6b6b; border-radius: 5px; padding: 5px; cursor: pointer; font-size: 12px;">Удалить из друзей</button>`;
        } else if (u.request_status === 'pending') {
            actionBtn = `<span style="color: #a4a8b4; font-size: 12px;">Заявка отправлена</span>`;
        } else {
            actionBtn = `<button onclick="sendRequest('${u.username}')" style="background: #7B2FFF ; color: #fff; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer; font-size: 12px;">+ В друзья</button>`;
        }
        
        usersList.innerHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #333;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="https://tangle-e5fj.onrender.com${u.avatar || '/logo.png'}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                    <div>
                        <b>${u.display_name || u.username}</b><br>
                        <span style="font-size: 10px;">${onlineDot}</span>
                    </div>
                </div>
                <div style="display: flex; gap: 10px; align-items: center;">
                    <button onclick="viewOtherProfile('${u.username}')" style="background: none; border: 1px solid #7B2FFF ; color: #7B2FFF ; border-radius: 5px; padding: 5px; cursor: pointer; font-size: 12px;">Профиль</button>
                    ${actionBtn}
                </div>
            </div>
        `;
    });
}

// 2. ЗАГРУЗКА МОИХ ДРУЗЕЙ
tabMyFriends.addEventListener("click", async () => {
    setTab(tabMyFriends);
    usersList.innerHTML = "Загрузка...";

    const response = await fetch(`https://tangle-e5fj.onrender.com/api/my-friends/${currentLoggedUser}`);
    const friends = await response.json();

    if (friends.length === 0) { usersList.innerHTML = "У тебя пока нет друзей :("; return; }

    usersList.innerHTML = "";
    friends.forEach(u => {
        let onlineDot = u.is_online === 1 ? '<span style="color: #7B2FFF ;">●</span> Онлайн' : '<span style="color: gray;">●</span> Офлайн';
        usersList.innerHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #333;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="https://tangle-e5fj.onrender.com${u.avatar || '/logo.png'}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                    <div>
                        <b>${u.display_name || u.username}</b><br>
                        <span style="font-size: 10px;">${onlineDot}</span>
                    </div>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button onclick="viewOtherProfile('${u.username}')" style="background: none; border: 1px solid #7B2FFF ; color: #7B2FFF ; border-radius: 5px; padding: 5px; cursor: pointer; font-size: 12px;">Профиль</button>
                    <button onclick="removeFriend('${u.username}')" style="background: none; border: 1px solid #ff6b6b; color: #ff6b6b; border-radius: 5px; padding: 5px; cursor: pointer; font-size: 12px;">Удалить</button>
                </div>
            </div>
        `;
    });
});

// 3. ЗАГРУЗКА ЗАЯВОК
tabRequests.addEventListener("click", async () => {
    setTab(tabRequests);
    usersList.innerHTML = "Загрузка...";

    const response = await fetch(`https://tangle-e5fj.onrender.com/api/friend-requests/${currentLoggedUser}`);
    const requests = await response.json();

    if (requests.length === 0) { usersList.innerHTML = "У тебя нет новых заявок."; return; }

    usersList.innerHTML = "";
    requests.forEach(u => {
        usersList.innerHTML += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #333;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="https://tangle-e5fj.onrender.com${u.avatar || '/logo.png'}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                    <div>
                        <b>${u.display_name || u.sender}</b> хочет добавить вас в друзья
                    </div>
                </div>
                <div style="display: flex; gap: 5px;">
                    <button onclick="acceptRequest('${u.sender}')" style="background: #7B2FFF; color: #fff; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer; font-size: 12px;">Принять</button>
                    <button onclick="rejectRequest('${u.sender}')" style="background: none; border: 1px solid #a4a8b4; color: #a4a8b4; border-radius: 5px; padding: 5px 10px; cursor: pointer; font-size: 12px;">Отклонить</button>
                </div>
            </div>
        `;
    });
});

// Проверка счетчика новых заявок (вызывается при загрузке страницы)
async function checkRequests() {
    if (!currentLoggedUser) return;
    const response = await fetch(`https://tangle-e5fj.onrender.com/api/friend-requests/${currentLoggedUser}`);
    const requests = await response.json();
    if (requests.length > 0) {
        reqCount.style.display = "inline-block";
        reqCount.innerText = requests.length;
    } else {
        reqCount.style.display = "none";
    }
}

// ДЕЙСТВИЯ С ДРУЗЬЯМИ
async function sendRequest(receiver) {
    await fetch('https://tangle-e5fj.onrender.com/api/send-friend-request', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sender: currentLoggedUser, receiver })
    });
    loadAllUsers(); // Обновляем список, чтобы кнопка стала "Заявка отправлена"
}

async function acceptRequest(sender) {
    await fetch('https://tangle-e5fj.onrender.com/api/accept-request', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sender, receiver: currentLoggedUser })
    });
    tabRequests.click(); // Обновляем список заявок
    checkRequests();     // Обновляем счетчик
}

async function rejectRequest(sender) {
    await fetch('https://tangle-e5fj.onrender.com/api/reject-request', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sender, receiver: currentLoggedUser })
    });
    tabRequests.click();
    checkRequests();
}

async function removeFriend(friendName) {
    if (!confirm(`Удалить ${friendName} из друзей?`)) return;
    await fetch('https://tangle-e5fj.onrender.com/api/remove-friend', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: currentLoggedUser, friendName })
    });
    loadAllUsers(); // Обновляем список
}

// 6. Просмотр чужого профиля
const otherProfileModal = document.getElementById("otherProfileModal");
const closeOtherProfileBtn = document.getElementById("closeOtherProfileBtn");

if (closeOtherProfileBtn) closeOtherProfileBtn.addEventListener("click", () => otherProfileModal.classList.add("hidden"));

async function viewOtherProfile(username) {
    otherProfileModal.classList.remove("hidden");
    const response = await fetch(`https://tangle-e5fj.onrender.com/api/user-profile/${username}`);
    const data = await response.json();

    document.getElementById("otherProfileName").innerText = data.user.display_name || data.user.username;
    document.getElementById("otherProfileBio").innerText = data.user.bio || "Нет описания";
    document.getElementById("otherProfileAvatar").src = data.user.avatar ? `https://tangle-e5fj.onrender.com${data.user.avatar}` : "logo.png";

    // Показываем лайки (названия песен)
    let likesContainer = document.getElementById("otherProfileLikes");
    likesContainer.innerHTML = "";
    if (data.likes.length === 0) likesContainer.innerText = "Нет любимых треков";
    data.likes.forEach(idx => {
        if(songs[idx]) likesContainer.innerHTML += `<div>🎵 ${songs[idx].songName} — ${songs[idx].artist}</div>`;
    });

    // Показываем загруженную музыку
    let musicContainer = document.getElementById("otherProfileMusic");
    musicContainer.innerHTML = "";
    if (data.uploadedMusic.length === 0) musicContainer.innerText = "Нет загруженной музыки";
    data.uploadedMusic.forEach(song => {
        musicContainer.innerHTML += `<div>🎤 ${song.song_name} — ${song.artist}</div>`;
    });
}
// ===== СОЗДАНИЕ ПЛЕЙЛИСТА =====
const createPlaylistBtn = document.getElementById("createPlaylistBtn");
const playlistModal = document.getElementById("playlistModal");
const closePlaylistBtn = document.getElementById("closePlaylistBtn");
const savePlaylistBtn = document.getElementById("savePlaylistBtn");
const playlistPrivacyCheckbox = document.getElementById("playlistPrivacyCheckbox");
const playlistPrivacyLabel = document.getElementById("playlistPrivacyLabel");

// Открытие окна
if (createPlaylistBtn) {
    createPlaylistBtn.addEventListener("click", () => {
        if (!currentLoggedUser) { alert("Войдите в аккаунт!"); return; }
        playlistModal.classList.remove("hidden");
    });
}

// Закрытие
if (closePlaylistBtn) closePlaylistBtn.addEventListener("click", () => playlistModal.classList.add("hidden"));

// Переключатель приватности
if (playlistPrivacyCheckbox) {
    playlistPrivacyCheckbox.addEventListener("change", function() {
        playlistPrivacyLabel.innerText = this.checked ? "Публичный" : "Приватный";
    });
}

// Сохранение плейлиста
if (savePlaylistBtn) {
    savePlaylistBtn.addEventListener("click", async () => {
        const name = document.getElementById("playlistNameInput").value.trim();
        const isPublic = playlistPrivacyCheckbox.checked;

        if (!name) { alert("Введите название!"); return; }

        try {
            const response = await fetch('https://tangle-e5fj.onrender.com/api/create-playlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: currentLoggedUser, name: name, isPublic: isPublic })
            });

            if (response.ok) {
                alert("Плейлист создан!");
                playlistModal.classList.add("hidden");
                document.getElementById("playlistNameInput").value = "";
                // Здесь в будущем мы добавим отображение плейлистов в меню
            }
        } catch (e) { alert("Ошибка соединения"); }
    });
}
// ===== ОТРИСОВКА ПЛЕЙЛИСТОВ =====
function renderPlaylists() {
    let container = document.getElementById("officialPlaylistList");
    if (!container) return;

    container.innerHTML = "";

    officialPlaylists.forEach((playlist, index) => {
        container.innerHTML += `
            <div class="playlist-card" onclick="playFullPlaylist(${index})">
                <button class="add-playlist-btn" onclick="savePlaylistToLibrary(event, ${index})" title="Добавить в библиотеку">
                    <i class="bi bi-plus"></i>
                </button>
                <img src="${playlist.cover}" alt="${playlist.name}">
                <h5>${playlist.name}</h5>
            </div>
        `;
    });
}

// Запускаем отрисовку после загрузки обложек
// (вызываем внутри loadCoversFromInternet или просто в конце файла)

// Функция: Открыть страницу плейлиста 
// Универсальная функция для открытия страницы плейлиста
// Вспомогательная функция для перевода секунд в формат "М:СС"
function formatTime(seconds) {
    if (!seconds) return "0:00";
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = "0" + sec;
    return `${min}:${sec}`;
}

// Универсальная функция для открытия страницы плейлиста
function openPlaylistView(title, coverUrl, songIndexes) {
    // 1. Заполняем шапку
    document.getElementById("playlistViewCover").src = coverUrl || "logo.png"; 
    document.getElementById("playlistViewTitle").innerText = title;
    document.getElementById("playlistViewCount").innerText = `${songIndexes.length} треков`;
    
    // 2. Генерируем список песен
    let container = document.getElementById("playlistViewSongs");
    container.innerHTML = "";

    // Сохраняем текущий плейлист в глобальную переменную для кнопки PLAY
    window.currentPlaylistSongs = songIndexes; 

    songIndexes.forEach((idx, i) => {
        let song = songs[idx];
        if (!song) return;

        // Достаем длительность, если она загрузилась, иначе ставим 0:00
        let duration = song.duration ? formatTime(song.duration) : "0:00";

        container.innerHTML += `
            <div class="songItem" onclick="playFromPlaylist(${idx})">
                <span class="num">${i + 1}</span>
                <img src="${song.cover}" alt="${song.songName}">
                <div class="track-info">
                    <h5>${song.songName}</h5>
                    <div class="subtitle">${song.artist}</div>
                </div>
                <span class="track-time">${duration}</span>
            </div>
        `;
    });

    // 3. Показываем страницу и прячем главный экран
    document.getElementById("playlistView").classList.remove("hidden");
    document.querySelector(".song_side .content").style.opacity = "0";
    document.querySelector(".song_side .popular_song").style.opacity = "0";
}

// Обертка для официальных плейлистов (чтобы кнопка на главном экране работала)
function playFullPlaylist(index) {
    let playlist = officialPlaylists[index];
    openPlaylistView(playlist.name, playlist.cover, playlist.songs);
}

// Функция: Включить трек из открытого плейлиста
function playFromPlaylist(index) {
    songIndex = index;
    loadSong();
    playMusic();
}
 
// Функция: Сохранить плейлист в библиотеку
async function savePlaylistToLibrary(event, playlistIndex) {
    event.stopPropagation(); // Чтобы не запустилось воспроизведение

    if (!currentLoggedUser) {
        alert("Войдите в аккаунт, чтобы сохранять плейлисты!");
        return;
    }

    const playlist = officialPlaylists[playlistIndex];
    const btn = event.target.closest('.add-playlist-btn');

    try {
        // Отправляем данные на сервер
        const response = await fetch('https://tangle-e5fj.onrender.com/api/save-official-playlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: currentLoggedUser, 
                playlistName: playlist.name, 
                songsArray: playlist.songs 
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert(`Плейлист "${playlist.name}" добавлен в вашу библиотеку!`);
            // Для красоты меняем иконку на галочку
            if (btn) {
                btn.innerHTML = '<i class="bi bi-check"></i>';
                btn.style.background = "#fff";
                btn.style.color = "#7B2FFF ";
            }
            // Обновляем список плейлистов пользователя, чтобы он сразу появился в меню
            loadUserPlaylists(); 
        } else {
            alert(data.error || "Ошибка сохранения");
        }
    } catch (e) {
        alert("Ошибка соединения с сервером");
    }
}
// ===== ЗАГРУЗКА ПЛЕЙЛИСТОВ ПОЛЬЗОВАТЕЛЯ В МЕНЮ =====
async function loadUserPlaylists() {
    if (!currentLoggedUser) return;

    try {
        const response = await fetch(`https://tangle-e5fj.onrender.com/api/my-playlists/${currentLoggedUser}`);
        const playlists = await response.json();

        // Удаляем старый контейнер, если он есть, чтобы не дублировать
        let oldContainer = document.getElementById("userPlaylistsContainer");
        if (oldContainer) oldContainer.remove();

        if (playlists.length === 0) return;

        // Создаем контейнер в левом меню
        let container = document.createElement("div");
        container.id = "userPlaylistsContainer";
        container.style.marginTop = "20px";
        container.innerHTML = `<h4 style="color:#4c5262; font-size:12px; padding-left:25px; margin-bottom:10px;">МОИ ПЛЕЙЛИСТЫ</h4>`;

        playlists.forEach(pl => {
            // Превращаем строку "21,18,6" обратно в массив чисел
            let songIndexes = pl.songs ? pl.songs.split(',').map(Number) : [];

            let el = document.createElement("h4");
            el.style.cssText = "font-size: 13px; font-weight: 500; padding: 10px 0 10px 25px; color: #a4a8b4; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s;";
            el.innerHTML = `<i class="bi bi-music-note-list"></i> ${pl.name}`;
            
            // Эффект при наведении
            el.onmouseenter = () => el.style.color = "#fff";
            el.onmouseleave = () => el.style.color = "#a4a8b4";

            // При клике на плейлист в библиотеке — показываем его песни
                        // При клике на плейлист в библиотеке — ОТКРЫВАЕМ СТРАНИЦУ
            el.addEventListener("click", () => {
                if (songIndexes.length > 0) {
                    // Передаем пустую строку "" вместо обложки, чтобы сработал логотип по умолчанию
                    openPlaylistView(pl.name, "", songIndexes);
                } else {
                    alert("Этот плейлист пока пуст");
                }
            });

            container.appendChild(el);
        });

        // Вставляем в левое меню после кнопок Playlist / Last Listening
        document.querySelector(".playlist").appendChild(container);

    } catch (e) {
        console.log("Ошибка загрузки плейлистов", e);
    }
}
// Кнопка "Назад" из плейлиста
let backFromPlaylist = document.getElementById("backFromPlaylist");
if (backFromPlaylist) {
    backFromPlaylist.addEventListener("click", () => {
        document.getElementById("playlistView").classList.add("hidden");
        
        // Возвращаем главный экран
        document.querySelector(".song_side .content").style.opacity = "1";
        document.querySelector(".song_side .popular_song").style.opacity = "1";
    });
}

// При загрузке страницы полоска должна стоять под Discover
window.addEventListener("load", () => {
    // Небольшая задержка, чтобы шрифты загрузились и размеры кнопок стали точными
    setTimeout(() => {
        moveIndicator(discoverBtn);
    }, 100);
});
// ===== ОТЗЫВЫ =====
const reviewsBtn = document.getElementById("reviewsBtn");
const reviewsModal = document.getElementById("reviewsModal");
const closeReviewsBtn = document.getElementById("closeReviewsBtn");
const sendReviewBtn = document.getElementById("sendReviewBtn");
const reviewsList = document.getElementById("reviewsList");
const reviewText = document.getElementById("reviewText");
const reviewAuthorName = document.getElementById("reviewAuthorName");

if (reviewsBtn) {
    reviewsBtn.addEventListener("click", () => {
        // Убираем выделение с других кнопок
        const allNavLis = document.querySelectorAll('.song_side nav ul li');
        allNavLis.forEach(li => li.style.color = "#4c5262");
        reviewsBtn.style.color = "#fff";

        reviewsModal.classList.remove("hidden");
        if (typeof moveIndicator === "function") moveIndicator(reviewsBtn); // Двигаем полоску
        reviewAuthorName.innerText = currentLoggedUser || "Гость";
        loadReviews();
    });
}

if (closeReviewsBtn) {
    closeReviewsBtn.addEventListener("click", () => reviewsModal.classList.add("hidden"));
}

async function loadReviews() {
    if (!reviewsList) return;
    reviewsList.innerHTML = "Загрузка...";
    try {
        const response = await fetch('https://tangle-e5fj.onrender.com/api/reviews');
        const reviews = await response.json();

        if (reviews.length === 0) {
            reviewsList.innerHTML = '<p style="color:#a4a8b4; font-size:13px;">Пока отзывов нет. Будь первым! ✨</p>';
            return;
        }

        reviewsList.innerHTML = "";
        reviews.forEach(r => {
            const authorName = r.display_name || r.username;
            const date = new Date(r.created_at + 'Z').toLocaleString('ru-RU', {
                day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
            });
            const safeText = r.text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

            reviewsList.innerHTML += `
                <div class="review-item">
                    <div>
                        <span class="author">${authorName}</span>
                        <span class="date">${date}</span>
                    </div>
                    <div class="text">${safeText}</div>
                </div>
            `;
        });
    } catch (e) {
        reviewsList.innerHTML = '<p style="color:#ff6b6b; font-size:13px;">Не удалось загрузить отзывы</p>';
    }
}

if (sendReviewBtn) {
    sendReviewBtn.addEventListener("click", async () => {
        if (!currentLoggedUser) {
            alert("Войдите в аккаунт, чтобы оставить отзыв!");
            return;
        }
        const text = reviewText.value.trim();
        if (!text) { alert("Напишите что-нибудь 🙂"); return; }

        sendReviewBtn.innerText = "Отправка...";
        sendReviewBtn.disabled = true;

        try {
            const response = await fetch('https://tangle-e5fj.onrender.com/api/add-review', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: currentLoggedUser, text })
            });

            if (response.ok) {
                reviewText.value = "";
                await loadReviews();
            } else {
                const data = await response.json();
                alert(data.error || "Ошибка отправки");
            }
        } catch (e) {
            alert("Ошибка соединения с сервером");
        } finally {
            sendReviewBtn.innerText = "Отправить";
            sendReviewBtn.disabled = false;
        }
    });
}




// Ставим полоску под Discover при загрузке
window.addEventListener("load", () => {
    setTimeout(() => moveIndicator(document.getElementById("discoverBtn")), 200);
});
// ===== ДВИЖЕНИЕ ФИОЛЕТОВОЙ ПОЛОСКИ =====
const navIndicator = document.getElementById("navIndicator");

function moveIndicator(element) {
    if (!element || !navIndicator) return;
    const leftPos = element.offsetLeft;
    const width = element.offsetWidth;
    navIndicator.style.left = `${leftPos}px`;
    navIndicator.style.width = `${width}px`;
}

// Собираем все кнопки меню в один массив
const navButtons = [
    document.getElementById("discoverBtn"), 
    document.getElementById("libraryBtn"), 
    document.getElementById("friendsBtn"), 
    document.getElementById("reviewsBtn"), // <--- Кнопка отзывов
    document.getElementById("radioBtn")
];

navButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener("click", () => moveIndicator(btn));
    }
});

// Ставим полоску под Discover при загрузке
window.addEventListener("load", () => {
    setTimeout(() => moveIndicator(document.getElementById("discoverBtn")), 200);
});
// ===== ЛОГИКА КНОПКИ ПЕРЕМЕШИВАНИЯ =====
let isShuffleActive = false;

const shuffleBtn = document.getElementById("shuffleBtn");
if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
        isShuffleActive = !isShuffleActive;
        shuffleBtn.classList.toggle("active");
        
        // Перемешиваем ТОЛЬКО песни текущего плейлиста
        if (isShuffleActive && window.currentPlaylistSongs) {
            let arr = window.currentPlaylistSongs;
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            // Обновляем экран, чтобы показать перемешанный порядок
            if (typeof openPlaylistView === "function") {
                // Перерисовываем текущий плейлист с новым порядком
                let currentTitle = document.getElementById("playlistViewTitle").innerText;
                let currentCover = document.getElementById("playlistViewCover").src;
                openPlaylistView(currentTitle, currentCover, arr);
            }
        }
    });
}

// Кнопка "Play All" (Воспроизвести весь плейлист)
const playAllBtn = document.getElementById("playAllBtn");
if (playAllBtn) {
    playAllBtn.addEventListener("click", () => {
        if (window.currentPlaylistSongs && window.currentPlaylistSongs.length > 0) {
            // Запускаем первый трек из этого плейлиста
            songIndex = window.currentPlaylistSongs[0]; 
            loadSong();
            playMusic();
        }
    });
}