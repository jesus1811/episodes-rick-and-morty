CREATE TABLE episode(
    id interval,
    season int,
    chapter int,
    name varchar(500),
    video varchar(500)
)
INSERT INTO
    episode(season, chapter, name, video)
values
    (
        1,
        1,
        'Pilot',
        'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x01.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3'
    );

INSERT INTO
    episode(season, chapter, name, video)
values
    (
        1,
        2,
        'Lawnmower Dog',
        'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x02.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3'
    );

INSERT INTO
    episode(season, chapter, name, video)
values
    (
        1,
        3,
        'Anatomy Park',
        'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x03.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3'
    );

INSERT INTO
    episode(season, chapter, name, video)
values
    (
        1,
        4,
        'M. Night Shaym-Aliens!',
        'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x04.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3'
    );

INSERT INTO
    episode(season, chapter, name, video)
values
    (
        1,
        5,
        'Meeseeks and Destroy',
        'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x05.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3'
    );

INSERT INTO
    episode(season, chapter, name, video)
values
    (
        1,
        6,
        'Rick Potion #9',
        'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x06.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3'
    );

INSERT INTO
    episode(season, chapter, name, video)
values
    (
        1,
        7,
        'Raising Gazorpazorp',
        'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x07.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3'
    );

INSERT INTO
    episode(season, chapter, name, video)
values
    (
        1,
        8,
        'Rixty Minutes',
        'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x08.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3'
    );

INSERT INTO
    episode(season, chapter, name, video)
values
    (
        1,
        9,
        'Something Ricked This Way Comes',
        'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x09.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3'
    );

INSERT INTO
    episode(season, chapter, name, video)
values
    (
        1,
        10,
        'Something Ricked This Way Comes',
        'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x10.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3'
    );

INSERT INTO
    episode(season, chapter, name, video)
values
    (
        1,
        11,
        'Something Ricked This Way Comes',
        'https://firebasestorage.googleapis.com/v0/b/rick-morty-72941.appspot.com/o/01x11.mkv?alt=media&token=fa4dd492-52a1-4dfc-9508-f89d01d2c3e3'
    );

SELECT
    season,
    chapter,
    name,
    video
FROM
    episode