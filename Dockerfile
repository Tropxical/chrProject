FROM denoland/deno

WORKDIR /CHRobinson
COPY . .

RUN chown -R deno:deno /CHRobinson
RUN deno upgrade

USER deno

RUN deno install

RUN deno task build

CMD [ "deno", "task", "start" ]