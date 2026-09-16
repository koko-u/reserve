workspace_root := justfile_directory()

_default:
    @just --list

# run rest api
api:
    @cargo run --package reserve-api --bin server --features api-doc

# watch rest api
api-dev:
    @cargo watch --clear --quiet --exec "run --package reserve-api --bin server --features api-doc"

# run angular spa
[working-directory("reserve-web")]
web-dev:
    pnpm start

# run api and spa
[parallel]
dev: api-dev web-dev


# docker up
dup:
    @docker compose -f {{ workspace_root }}/docker/compose.yml up -d

# docker down
dwn:
    @docker compose -f {{ workspace_root }}/docker/compose.yml down

# format rust code
api-fmt:
    @cargo +nightly fmt

# format typescript code
[working-directory("reserve-web")]
web-fmt:
    @pnpm run fmt

# format
[parallel]
fmt: api-fmt web-fmt
