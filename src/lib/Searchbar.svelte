<script>
</script>

<form class="searchbar" method="GET">
    <label>
        <input type="text" placeholder="Search" name="searchbar" />
    </label>
</form>

<style>
    form {
        position: fixed;
        bottom: 30px;
        width: 100%;

        label {
            width: 100%;
            display: flex;
            justify-content: center;

            input {
                border: 1px solid var(--color-primary);
                background: transparent;
                padding-block: 0.5rem;

                font-size: 1.2rem;
                text-align: center;
                text-transform: uppercase;
                color: var(--color-primary);

                width: clamp(8rem, 40%, 18rem);

                &::placeholder {
                    color: var(--color-primary);
                }
            }
        }
    }
</style>
