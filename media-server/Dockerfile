FROM node:16.13-buster-slim

# Install FFmpeg

RUN apt update --fix-missing
RUN apt install -y software-properties-common \
        libfreetype6-dev \
        libgnutls28-dev \
        libmp3lame-dev \
        libass-dev \
        libogg-dev \
        libtheora-dev \
        libvorbis-dev \
        libvpx-dev \
        libwebp-dev \
        libssh2-1-dev \
        libopus-dev \
        librtmp-dev \
        libx264-dev \
        libx265-dev \
        yasm
RUN apt install -y \
        build-essential \
        bzip2 \
        coreutils \
        procps \
        gnutls-bin \
        nasm \
        tar \
        x264

RUN apt install -y \
                ffmpeg \
                git \
                make \
                g++ \
                gcc \
                pkg-config \
                python3 \
                wget \
                tar \
                sudo \
                xz-utils

WORKDIR /usr/src/app/media-server

COPY package.json ./

RUN npm i npm@latest -g && \
    npm install --unsafe-perm

# add app
COPY . .

EXPOSE 8000 8443 1935 8082

CMD ["npm", "run", "start"]