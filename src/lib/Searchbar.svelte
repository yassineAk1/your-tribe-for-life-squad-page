<script>
</script>

<form class="searchbar" method="GET" action="/">
    <label>
        <input type="search" placeholder="Search" name="searchbar" />
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.26805 1.5C10.5941 1.5 11.8659 2.02678 12.8036 2.96447C13.7413 3.90215 14.268 5.17392 14.268 6.5C14.268 7.82608 13.7413 9.09785 12.8036 10.0355C11.8659 10.9732 10.5941 11.5 9.26805 11.5C7.94196 11.5 6.6702 10.9732 5.73251 10.0355C4.79483 9.09785 4.26805 7.82608 4.26805 6.5C4.26805 5.17392 4.79483 3.90215 5.73251 2.96447C6.6702 2.02678 7.94196 1.5 9.26805 1.5ZM15.768 6.5C15.768 4.77609 15.0832 3.12279 13.8642 1.90381C12.6453 0.684819 10.992 0 9.26805 0C7.54414 0 5.89084 0.684819 4.67185 1.90381C3.45287 3.12279 2.76805 4.77609 2.76805 6.5C2.76805 8.22391 3.45287 9.87721 4.67185 11.0962C5.89084 12.3152 7.54414 13 9.26805 13C10.992 13 12.6453 12.3152 13.8642 11.0962C15.0832 9.87721 15.768 8.22391 15.768 6.5Z"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.29871 10.4703C5.15808 10.3299 4.96746 10.251 4.76871 10.251C4.56996 10.251 4.37933 10.3299 4.23871 10.4703L0.238707 14.4703C0.16502 14.539 0.105918 14.6218 0.0649261 14.7138C0.0239342 14.8058 0.00189313 14.9051 0.000116348 15.0058C-0.00166044 15.1065 0.0168635 15.2065 0.0545845 15.2999C0.0923055 15.3933 0.148451 15.4781 0.219669 15.5494C0.290888 15.6206 0.375722 15.6767 0.46911 15.7144C0.562499 15.7522 0.662527 15.7707 0.763229 15.7689C0.863932 15.7671 0.963247 15.7451 1.05525 15.7041C1.14725 15.6631 1.23005 15.604 1.29871 15.5303L5.29871 11.5303C5.43916 11.3897 5.51805 11.1991 5.51805 11.0003C5.51805 10.8016 5.43916 10.6109 5.29871 10.4703Z"
            />
        </svg>
    </label>
</form>

<style>
    form {
        label {
            width: min-content;
            border: 1px solid var(--color-primary);
            display: grid;
            grid-template-columns: 1fr max-content;
            padding-inline: 8px;

            input {
                background: transparent;
                padding-block: 0.5rem;
                border: none;

                font-size: 1.2rem;
                font-family:
                    Intel-One-Mono,
                    system-ui,
                    -apple-system,
                    BlinkMacSystemFont,
                    "Segoe UI",
                    Roboto,
                    Oxygen,
                    Ubuntu,
                    Cantarell,
                    "Open Sans",
                    "Helvetica Neue",
                    sans-serif;
                color: var(--color-primary);

                width: clamp(8rem, 40%, 18rem);

                &::placeholder {
                    color: var(--color-primary);
                }
            }
            svg {
                fill: var(--color-primary);
                align-self: center;
            }
        }
    }
</style>
