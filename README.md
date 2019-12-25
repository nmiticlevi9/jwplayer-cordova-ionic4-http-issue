# Requirements
```
npm i -g cordova@9.0.0
npm i -g ionic
```

# Build & install
```
# start iOS emulator
npm i
ionic cordova platform add ios --nofetch
ionic emulate ios --nofetch
```
When the app starts inspect it with the Safari Web Inspector. After that go to the second tab and open the second tab in the app.

On the second tab jwplayer will show the `error 101104`, and in the Web Inspector's network tab you will se that the additional scripts that jwplayer loads are fetched from the url `ionic://ssl.p.jwpcdn.com/player/v/8.11.10/jwpsrv.js` which results in the 404 error in the console tab.
