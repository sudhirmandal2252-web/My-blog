var player = fluidPlayer('video-id', {
    layoutControls: {
        controlBar: {
            autoHideTimeout: 3,
            animated: true,
            autoHide: true
        },
        htmlOnPauseBlock: {
            html: null,
            height: null,
            width: null
        },
        autoPlay: true,
        mute: true,
        allowTheatre: true,
        playPauseAnimation: false,
        playbackRateEnabled: false,
        allowDownload: false,
        playButtonShowing: false,
        fillToContainer: false,
        posterImage: ""
    },

    vastOptions: {
        adList: [
            {
                roll: "preRoll",
                vastTag: "https://plumprush.com/dSmpF.zydLG/Nxv-ZYGSUL/yeTmR9luBZBU_lwkNPtTtYD3/MiDbEFxsMUTrgUtoNljGcYw/M/TeEwxGOUQi",
                adText: ""
            }
        ],
        adCTAText: false,
        adCTATextPosition: ""
    }
});
