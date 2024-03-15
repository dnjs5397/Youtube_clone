const videos = [
    {
        title: "Video #1",
        rating: 5,
        commnets: 2,
        createAt: "2 minutes ago",
        views: 59,
        id: 1
    },
    {
        title: "Video #2",
        rating: 2,
        commnets: 16,
        createAt: "16 minutes ago",
        views: 659,
        id: 2
    },
    {
        title: "Video #3",
        rating: 3,
        commnets: 42,
        createAt: "25 minutes ago",
        views: 1,
        id: 3
    }
]

export const trending = (req, res) => {
    res.render('home', {pageTitle: 'Home', videos});
}
export const watch = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1];
    res.render('watch', {pageTitle: video.title, video});
}
export const edit = (req, res) => {
    const id = req.params.id;
    const video = videos[id-1];
    res.render('edit', {pageTitle: `비디오 편집 : ${video.title}`, video});
}   
export const postEdit = (req, res) => {
    const id = req.params.id;
    videos[id-1].title = req.body.title;
    return res.redirect(`/videos/${id}`);
}
export const search = (req, res) => {
    res.send("Search Video");
}
export const upload = (req, res) => {
    res.send("Upload");
}
export const deleteVideo = (req, res) => {
    res.send("Delete Video");
}