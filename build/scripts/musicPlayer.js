const music = [
    {
        title: 'Tadhana',
        singer: 'Up Dharma Down',
        image: 'build/assets/tadhana.jpg',
        songPath:'build/music/Tadhana - Up Dharma Down.mp3'
    },
    {
        title: 'BIRDS OF A FEATHER ',
        singer: 'Billie Eilish ',
        image: 'build/assets/birds of a feather.jpg',
        songPath:'build/music/Billie Eilish - BIRDS OF A FEATHER (Official Lyric Video).mp3'
    }
]

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');
const musicContainer  = document.getElementById('musicContainer')
const songTitle = document.getElementById('songTitle');
const albumCover = document.getElementById('albumCover');
const artistName = document.getElementById('artistName');
let currentMusicIndex = 0

renderMusic(currentMusicIndex)

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = `
            <svg width="64px" height="64px" viewBox="0 0 24 24" class="w-6 h-6 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#000000"></path>
                <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#000000"></path>
            </svg>
        `;
    } else {
        audio.pause();
        playPauseBtn.innerHTML = `
            <svg width="64px" height="64px" viewBox="0 0 24 24" class="w-6 h-6 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z" fill="#000000"></path>
            </svg>
        `;
    }
});


audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${percent}%`;
    console.log(percent)
    // Update current time
    currentTime.textContent = formatTime(audio.currentTime);
});


audio.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime(audio.duration)
    console.log(audio.duration)
})


function formatTime(time){
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

progress.parentElement.addEventListener('click', (e) => {
    const rect = progress.parentElement.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const width = rect.width;
    audio.currentTime = (offsetX / width) * audio.duration;
});


nextBtn.addEventListener('click', () => {
    currentMusicIndex = (currentMusicIndex + 1) % music.length;
    renderMusic(currentMusicIndex);
    audio.play();
});


function renderMusic(index){
    const song = music[index];
    albumCover.src = song.image;
    songTitle.textContent = song.title;
    artistName.textContent = song.singer;
    audio.src = song.songPath;

    progress.style.width = '0%';
    currentTime.textContent = '0:00';
    duration.textContent = '0:00';
}

renderMusic()