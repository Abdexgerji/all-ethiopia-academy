const PlayerSVG2 = ({ style, width, height, fill }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      viewBox='0 0 284.557 512'
      style={{ ...style }}
      height={height}
      width={width}
    >
      <g transform='matrix(.81917 0 0 .81917 -.006 -12.247)'>
        <path
          fill={fill}
          d='M290.625 638.247c-12.986-4.117-22.61-12.27-28.916-24.497-3.158-6.122-3.549-8.176-3.565-18.75-.016-10.18.441-12.857 3.208-18.753 9.3-19.823 32.22-30.383 53.088-24.457 32.618 9.262 43.71 48.113 20.933 73.324-10.96 12.131-30.148 17.763-44.748 13.133zm-153.906-22.954c-.903-.59-1.391-5.824-1.366-14.668.028-10.07-.66-16.39-2.574-23.612l-2.613-9.862 2.573-7.013c2.004-5.462 4.611-8.987 11.792-15.941 5.07-4.91 9.219-9.902 9.219-11.093 0-1.19 2.258-5.545 5.018-9.678 4.87-7.293 4.994-7.74 4.225-15.243-.997-9.733.17-12.109 12.58-25.627L185 472.29v-7.237c0-3.98.857-9.668 1.905-12.638 3.458-9.801 2.466-39.303-1.274-37.868-.927.355-2.855.02-4.283-.744-2.116-1.132-2.602-2.599-2.617-7.908-.01-3.586-.565-7.363-1.231-8.394-.804-1.244-1.218-1.35-1.23-.316-.01.857-1.912 3.67-4.225 6.25-3.017 3.365-4.46 6.423-5.105 10.82-.506 3.446-3.586 11.294-7.037 17.929-3.375 6.49-9.819 19.61-14.32 29.155-7.641 16.205-8.256 18.164-9.275 29.571-.93 10.4-1.969 14.26-6.986 25.966-7.412 17.294-13.072 33.885-13.072 38.318 0 1.875-.563 3.757-1.25 4.182-.688.425-1.25 2.07-1.25 3.655 0 3.862-4.53 9.408-9.272 11.352-4.43 1.816-11.309 1.097-15.467-1.617-7.373-4.813-12.939-22.82-10.2-32.994.78-2.893 3.825-9.509 6.767-14.703 2.943-5.193 8.296-15.35 11.895-22.568 3.6-7.219 7.84-14.85 9.425-16.96 2.427-3.229 3.097-6.361 4.251-19.869.754-8.82 2.775-26.95 4.492-40.29 3.48-27.038 4.82-30.907 13.82-39.908 3.88-3.88 5.53-6.559 5.508-8.943-.052-5.882-2.53-14.554-4.899-17.155-6.615-7.261-10.83-21.5-13.88-46.875-3.45-28.716-3.563-27.701 4.642-41.347 3.895-6.478 8.957-13.889 11.25-16.47 3.742-4.211 4.168-5.458 4.168-12.211 0-5.055.984-9.943 3-14.903 1.649-4.06 3.394-9.814 3.877-12.788.484-2.973 3.353-13.638 6.376-23.7 3.023-10.061 5.497-19.807 5.497-21.658 0-6.412-8.609-23.84-15.582-31.547l-6.616-7.31-14.839-1.458c-8.16-.8-17.573-2.409-20.915-3.572-5.55-1.933-6.43-1.947-10.167-.166-2.25 1.073-6.05 3.672-8.446 5.775-2.396 2.104-11.597 7.832-20.447 12.73-11.694 6.47-18.405 11.157-24.557 17.149-11.722 11.417-14.374 12.954-19.769 11.465-2.381-.658-6.289-2.831-8.683-4.83C.64 164.04.625 163.988.625 153.516v-10.509l7.361-7.19c6.553-6.4 7.77-7.1 11.09-6.37 2.157.473 3.988 1.816 4.346 3.186.341 1.302 1.06 2.367 1.597 2.367.538 0 7.082-6.104 14.542-13.564C51.931 109.065 54.5 107.15 68.75 99.675c13.359-7.007 17.334-8.485 27.408-10.186 6.48-1.094 16.258-1.989 21.727-1.989 8.005 0 10.796-.526 14.309-2.697 3.949-2.44 4.914-2.556 10.163-1.21 3.803.974 14.505 1.365 31.088 1.134 27.58-.384 27.65-.407 22.53-7.331-2.069-2.799-2.9-5.965-3.266-12.45-.453-8.021-.298-8.696 2.004-8.696 2.762 0 3.989-3.047 4.027-10 .07-12.769 8.237-23.27 22.117-28.438 7.89-2.938 21.195-3.821 25.163-1.67 3.404 1.845 13.322 11.674 15.82 15.678 3.782 6.063 4.572 25.143 1.553 37.555-1.337 5.5-2.864 10.563-3.393 11.25-.529.688-1.338 3.013-1.798 5.168-.83 3.885-.734 3.974 11.418 10.547 6.74 3.646 15.445 8.233 19.345 10.193 8.858 4.453 21.446 17.644 25.899 27.139 3.197 6.816 3.262 7.495 3.336 34.5.04 15.15.546 28.31 1.122 29.242 1.554 2.515 1.944 52.353.455 58.211-1.689 6.645-9.056 15.625-12.819 15.625-3.87 0-23.963-17.908-30.115-26.84-2.617-3.8-5.087-6.906-5.488-6.9-.402.005-2.04 2.301-3.64 5.103l-2.909 5.094 2.09 11.61c2.048 11.37 2.014 27.85-.09 43.366-.439 3.238-.087 9.045.796 13.125 1.689 7.81 1.612 12.705-.237 14.961-1.582 1.931-6.116 26.257-7.429 39.856-.597 6.188-2.782 22.192-4.855 35.565-3.436 22.161-4.112 24.791-7.638 29.7-9.173 12.775-18.557 39.33-18.678 52.86-.049 5.407-4.13 14.335-12.069 26.404-6.825 10.375-11.844 15.617-30.255 31.592-7.049 6.116-13.56 12.585-14.47 14.375-2.944 5.797-3.4 16.308-1.28 29.504 1.105 6.875 2.309 15.086 2.675 18.247l.665 5.746-6.703.805c-9.074 1.09-28.87 1.006-30.609-.13z'
        ></path>
        <path
          fill={fill}
          d='M288.019 637.042c-12.914-4.801-20.816-12.063-26.643-24.485-2.768-5.902-3.243-8.604-3.195-18.182.068-13.731 2.604-20.14 11.831-29.896 9.221-9.75 18.703-13.774 32.488-13.789 12.649-.013 21.298 3.346 30.532 11.857 25.276 23.3 15.185 64.944-18.167 74.97-10.56 3.174-17.353 3.054-26.846-.475zm-151.353-22.355c-.54-.859-1.066-8.03-1.17-15.937-.132-10.019-.939-17.057-2.663-23.226-2.277-8.144-2.323-9.24-.579-13.75 2.014-5.204 9.848-16.774 11.358-16.774 2.311 0 10.138-8.725 10.138-11.3 0-1.562 1.323-4.58 2.94-6.707 5.942-7.82 7.273-11.727 6.393-18.771-1.073-8.586 1.452-13.625 13.14-26.23 8.648-9.328 8.777-9.568 8.777-16.311 0-3.764.938-9.535 2.085-12.825 1.43-4.104 2.068-9.919 2.032-18.531-.071-16.88-.883-20.263-4.86-20.263-4.202 0-4.38-.294-5.401-8.956-.49-4.157-1.277-7.944-1.749-8.415-.471-.472-.857-.221-.857.557s-1.804 3.47-4.009 5.98c-2.728 3.108-4.72 7.367-6.235 13.333-1.225 4.822-4.764 13.167-7.866 18.545-3.102 5.378-5.64 10.114-5.64 10.526 0 .411-2.315 5.36-5.145 10.996-7.9 15.734-10.693 24.3-11.496 35.257-.404 5.506-1.523 11.975-2.487 14.375-.964 2.401-2.21 5.49-2.767 6.865-.558 1.375-1.111 2.781-1.23 3.125-1.189 3.442-2.442 6.494-4.62 11.25-4.012 8.767-8.505 22.602-8.505 26.19 0 1.79-.824 4.43-1.83 5.868-1.008 1.437-1.55 2.896-1.204 3.241.345.345-.053 2.12-.884 3.945-2.156 4.732-8.509 8.256-14.881 8.256-4.704 0-6.024-.673-10.512-5.356-9.638-10.059-11.215-24.502-4.18-38.275 2.317-4.534 7.784-15.275 12.15-23.869 4.366-8.594 9.5-17.875 11.408-20.625 3.212-4.628 3.664-6.86 6.076-30 5.947-57.066 6.876-60.901 17.153-70.813l5.638-5.437-.682-7.943c-.546-6.355-1.581-9.297-5.178-14.716-7.83-11.796-11.33-25.876-14.444-58.092-1.517-15.687-1.51-15.772 1.486-20.843 1.655-2.801 5.096-8.664 7.647-13.03 2.55-4.366 6.347-9.576 8.437-11.578 3.371-3.23 3.8-4.452 3.8-10.832 0-4.48 1.154-10.401 3.06-15.704 1.684-4.682 3.876-12.168 4.871-16.637.996-4.469 3.82-14.594 6.277-22.5 2.457-7.906 4.484-16.305 4.504-18.664.07-7.884-7.39-23.605-15.151-31.935l-7.065-7.582-13.89-1.476c-7.64-.812-16.903-2.426-20.584-3.586-8.315-2.621-10.97-1.96-19.144 4.77-3.573 2.941-13.124 8.967-21.223 13.39-10.916 5.96-17.404 10.564-25.077 17.791-13.13 12.368-16.553 13.333-26.189 7.383-4.291-2.65-6.62-8.43-6.632-16.467-.008-5.405 2.245-12.374 4-12.374.696 0 3.624-2.57 6.507-5.71 4.598-5.008 5.678-5.602 8.778-4.824 1.944.488 3.808 1.933 4.142 3.21.334 1.278 1.131 2.324 1.77 2.324.64 0 7.184-6.05 14.543-13.443 11.943-12.002 14.984-14.303 28.353-21.45 17.201-9.197 25.507-11.36 45.65-11.883 10.622-.276 14.154-.867 18.523-3.101 4.591-2.348 6.019-2.556 9.558-1.387 2.65.874 13.731 1.24 30.52 1.006 26.617-.37 30.218-1.054 25.627-4.864-3.066-2.544-5.478-9.765-5.478-16.398 0-5.174.42-6.324 2.514-6.871 2.637-.69 3.12-2.047 4.36-12.234.418-3.438 1.333-8.07 2.033-10.292C204.361 24.706 222.551 15 237.172 15c7.43 0 8.013.236 14.349 5.797 10.362 9.095 12.762 13.982 12.94 26.351.08 5.708.425 10.654.763 10.993.682.682-3.887 18.411-6.755 26.212l-1.83 4.978 10.743 6.067c5.909 3.337 14.188 7.714 18.4 9.726 5.52 2.638 10.401 6.531 17.5 13.955 14.222 14.876 14.832 16.964 14.883 50.921.022 14.781.512 27.634 1.088 28.56 1.472 2.37 1.956 49.663.575 56.238-1.233 5.877-7.515 14.696-11.33 15.907-1.323.42-3.862-.212-5.747-1.43-5.747-3.717-22.825-20.833-27.166-27.228l-4.126-6.078-3.427 5.428-3.426 5.428 2.24 13.783c2.202 13.554 2.182 19.762-.137 43.736-.42 4.328-.065 10.211.84 13.986 1.39 5.795 1.278 7.461-1.013 15.031-3.134 10.357-6.53 28.483-6.554 34.989-.01 2.626-1.974 17.15-4.364 32.275-2.39 15.125-4.35 28.181-4.357 29.014-.006.832-1.084 2.52-2.395 3.75-3.728 3.496-14.583 26.352-16.836 35.45-1.12 4.518-2.594 12.625-3.277 18.016-1.39 10.96-4.413 17.28-16.088 33.63-4.704 6.588-10.15 12.24-16.415 17.036-5.156 3.947-13.115 11.068-17.686 15.825-8.085 8.414-8.335 8.87-9.18 16.772-.596 5.555-.18 12.452 1.317 21.815 1.203 7.53 2.24 15.657 2.306 18.058.115 4.24-.046 4.392-5.507 5.22-10.066 1.528-29.756 1.193-30.834-.523z'
        ></path>
        <path
          fill={fill}
          d='M289.704 637.51c-14.404-5.48-21.802-11.973-27.982-24.56-3.106-6.325-3.597-8.775-3.597-17.95 0-12.543 3.365-21.248 11.715-30.307 21.079-22.868 58.926-17.155 72.78 10.986 3.476 7.06 3.983 9.378 4.02 18.388.057 13.39-3.303 22.373-11.525 30.815-12.73 13.068-30.94 18.133-45.411 12.627zm-151.835-22.436c-2.61-1.138-2.72-1.751-2.064-11.575.488-7.319.08-13.135-1.387-19.749-3.704-16.706-3.723-17.942-.382-25.19 1.695-3.676 5.501-8.935 8.459-11.685 2.957-2.75 6.7-6.24 8.316-7.756 1.616-1.515 2.939-3.843 2.939-5.172 0-1.329 2.11-5.433 4.688-9.12 4.396-6.286 4.688-7.284 4.708-16.077.025-11.439 1.312-14.07 13.09-26.773 8.337-8.992 8.764-9.746 8.764-15.488 0-3.32.953-9.09 2.118-12.825 2.284-7.325 2.992-27.072 1.263-35.226-.865-4.079-1.454-4.688-4.531-4.688-2.962 0-3.665-.636-4.319-3.906-.43-2.149-.806-6.508-.837-9.688-.055-5.753-.066-5.767-2.187-2.88-1.173 1.596-3.598 4.69-5.39 6.875-1.792 2.186-3.98 7.017-4.86 10.737-.882 3.72-6.823 17.22-13.203 30-14.975 29.998-16.288 33.557-17.268 46.785-.552 7.458-1.763 13.146-3.727 17.5-7.885 17.484-15.809 39.636-15.809 44.198 0 1.674-.669 4.272-1.486 5.774-.817 1.501-1.573 3.807-1.68 5.122-.108 1.316-2.316 4.335-4.906 6.708-4.327 3.966-5.208 4.268-10.86 3.725-7.013-.674-11.04-3.733-15.237-11.575-2.133-3.985-2.676-7.156-2.675-15.625l.001-10.625 8.869-16.25c4.877-8.938 10.047-18.934 11.487-22.214 1.441-3.28 4.298-8.343 6.35-11.25 3.341-4.736 3.877-6.846 5.146-20.286.779-8.25 2.464-22.875 3.744-32.5 1.28-9.625 2.703-20.865 3.163-24.978 1.055-9.428 5.154-17.589 11.897-23.68l5.257-4.75-.625-7.787c-.504-6.269-1.637-9.464-5.812-16.386-2.852-4.73-5.763-10.865-6.468-13.634-.705-2.77-1.81-6.441-2.454-8.16-1.866-4.978-6.385-46.335-5.523-50.55.43-2.104 2.616-6.64 4.857-10.082 2.241-3.441 5.036-8.115 6.21-10.387 1.175-2.272 4.172-6.384 6.66-9.138 4.022-4.451 4.494-5.677 4.249-11.04-.182-3.983.857-9.156 3.06-15.23 1.834-5.059 3.745-11.73 4.246-14.823.5-3.094 3-12.375 5.555-20.625 7.39-23.87 7.41-24.164 2.317-36.044-4.702-10.97-9.818-18.448-16.423-24.006-3.716-3.126-5.505-3.593-17.305-4.514-7.239-.565-16.115-1.958-19.724-3.096-8.126-2.561-11.464-1.784-18.506 4.31-3.026 2.62-12.76 8.772-21.63 13.673-11.098 6.132-18.433 11.175-23.515 16.169-13.905 13.665-16.922 14.907-25.476 10.487-5.74-2.965-7.218-5.348-8.329-13.421C-.262 149.798 1.683 140 3.997 140c.77 0 3.702-2.489 6.514-5.53 4.367-4.722 5.64-5.427 8.715-4.823 2.064.405 3.86 1.698 4.208 3.03.334 1.278 1.175 2.323 1.869 2.323.693 0 7.03-5.818 14.08-12.929 11.25-11.345 14.685-13.949 28.047-21.255 17.682-9.669 27.13-12.18 47.57-12.643 11.029-.25 13.869-.744 17.784-3.092 4.073-2.443 5.204-2.614 9.003-1.36 6.325 2.087 56.65 1.397 57.49-.79.337-.88.068-1.938-.6-2.35-3.214-1.988-6.291-10.924-5.927-17.217.318-5.502.776-6.546 3.01-6.865 2.325-.332 2.726-1.47 3.423-9.71.977-11.558 4.122-18.008 11.121-22.803 8.248-5.652 20.793-9.412 29.1-8.723 6.336.525 7.54 1.136 13.232 6.72 10.393 10.194 11.567 12.887 11.921 27.318.305 12.45-1.425 23.064-5.107 31.324-.92 2.063-2.005 4.875-2.413 6.25-.8 2.699-.613 2.822 24.213 15.941 18.75 9.91 32.379 24.557 35.757 38.434.586 2.406 1.144 14.219 1.24 26.25.096 12.031.599 36.144 1.118 53.583 1.072 36.031.723 38.383-6.791 45.72-4.361 4.258-5.364 4.711-7.85 3.545-4.624-2.17-22.25-19.133-28.024-26.973l-5.34-7.25-3.18 5.038c-3.743 5.929-3.81 7.169-1.16 21.24 1.522 8.086 1.787 13.641 1.078 22.597-1.248 15.747-1.257 30.652-.024 37.176.676 3.576.526 5.873-.461 7.063-1.689 2.034-7.613 31.675-7.613 38.089 0 4.482-6.48 48.402-8.832 59.86-.741 3.609-1.816 6.562-2.388 6.562-1.365 0-7.429 10.837-12.347 22.065-4.128 9.424-7.37 22.648-8.336 34.005-.645 7.58-3.035 12.283-15.019 29.555-5.553 8.004-10.099 12.93-15.754 17.071-4.372 3.202-12.256 10.255-17.52 15.675-8.542 8.793-9.672 10.52-10.502 16.053-.952 6.35.967 27.385 3.499 38.354.878 3.804.954 6.467.205 7.216-1.665 1.665-31.755 2.805-35.137 1.33z'
        ></path>
        <path
          fill={fill}
          d='M289.024 636.953c-14.439-5.363-21.01-11.395-27.377-25.13-2.847-6.143-3.458-9.205-3.487-17.474-.03-8.848.448-11.007 4.073-18.372 13.664-27.755 49.832-33.954 71.57-12.267 19.398 19.35 16.69 51.61-5.615 66.91-7.507 5.148-19.364 9.332-26.313 9.284-2.75-.019-8.533-1.347-12.85-2.95zm-150.43-21.997c-2.911-.695-2.96-.942-2.515-12.732.354-9.403-.17-14.605-2.404-23.876-2.809-11.65-2.82-11.958-.605-17.913 1.604-4.313 4.909-8.653 11.467-15.057 5.067-4.949 9.214-10.011 9.216-11.25.001-1.24 2.308-5.628 5.126-9.753 4.924-7.21 5.096-7.79 4.44-15-.887-9.727 1.484-14.768 12.766-27.144 8.519-9.345 8.52-9.349 9.265-18.225.409-4.883 1.467-10.173 2.351-11.755 1.797-3.215 2.327-29.292.713-35.064-.763-2.725-1.703-3.437-4.54-3.437-3.544 0-3.59-.096-4.459-9.375-.872-9.307-2.243-11.748-3.816-6.793-.45 1.42-2.434 4.421-4.408 6.669-1.973 2.248-4.16 6.637-4.858 9.754-1.766 7.878-3.296 11.636-8.553 20.995-4.609 8.206-13.01 25.909-18.502 38.986-1.877 4.47-3.392 11.434-4.078 18.75-.629 6.708-2.15 14.022-3.591 17.264-7.17 16.131-11.71 27.962-14.167 36.917-1.504 5.477-3.23 10.935-3.838 12.129-.607 1.193-1.104 3.526-1.104 5.183 0 1.903-1.686 4.492-4.577 7.031-4.123 3.62-5.184 3.961-10.666 3.434-10.556-1.014-16.911-10.058-18.115-25.779l-.64-8.356 12.795-24.967c7.037-13.732 14.128-26.763 15.758-28.958 2.625-3.535 3.25-6.852 5.46-28.974 1.372-13.74 2.758-25.725 3.08-26.634.321-.908 1.169-7.557 1.883-14.776 1.528-15.455 4.906-23.596 12.719-30.654l5.123-4.628-.625-7.788c-.504-6.278-1.636-9.46-5.837-16.421-2.866-4.749-5.51-10.04-5.873-11.759-.364-1.719-1.464-5.754-2.443-8.967-.98-3.214-2.359-11.651-3.065-18.75-.706-7.1-1.851-16.44-2.544-20.758-1.444-9.003-.271-15.077 4.183-21.666 1.575-2.329 4.63-7.328 6.788-11.109 2.16-3.781 5.652-8.527 7.76-10.546 3.543-3.392 3.836-4.319 3.836-12.152 0-6.328.793-10.274 3.125-15.547 1.719-3.886 3.125-8.638 3.125-10.559 0-1.92 2.004-9.866 4.454-17.657 2.449-7.79 5.28-17.704 6.29-22.03l1.836-7.867-4.956-11.165c-5.517-12.429-10.71-19.606-17.475-24.156-3.735-2.512-6.594-3.161-16.399-3.726-6.755-.388-15.073-1.756-19.293-3.172-7.259-2.436-7.514-2.44-11.961-.17-2.5 1.274-6.856 4.249-9.681 6.61-2.826 2.36-11.612 7.805-19.526 12.101-10.724 5.822-17.274 10.482-25.72 18.299-6.453 5.97-12.424 10.487-13.866 10.487-3.968 0-10.29-3.114-13.592-6.696-2.597-2.816-3.025-4.546-3.095-12.49l-.08-9.223 7.912-7.79c5.736-5.649 8.289-7.414 9.282-6.42.754.753 2.343 1.369 3.533 1.369 1.286 0 2.333 1.14 2.581 2.813.361 2.428 2.328.922 14.415-11.043 12.48-12.353 15.664-14.753 29.391-22.146 17.95-9.668 27.297-12.147 47.377-12.566 9.218-.192 13.95-.815 15.411-2.027 1.707-1.417 8.514-1.71 35.76-1.534 32.81.211 33.652.155 33.652-2.265 0-1.365-.594-2.482-1.32-2.482-2.534 0-6.333-11.015-5.935-17.208.34-5.296.675-5.886 3.193-5.62 2.39.254 2.82-.308 2.86-3.75.08-6.929 1.23-13.835 3.217-19.317 3.94-10.873 24.51-20.513 39.12-18.334 6.48.967 16.184 9.208 20.435 17.354 4.73 9.067 3.516 35.967-2.117 46.875-.887 1.719-1.97 4.628-2.408 6.466-.755 3.178-.14 3.692 12.643 10.57 7.39 3.975 16.064 8.547 19.274 10.158 8.7 4.366 22.61 19.613 26.088 28.594 2.555 6.598 2.867 9.728 3.094 31.087.139 13.063.663 38.184 1.166 55.826 1.024 35.958.775 37.423-7.624 44.797-4.02 3.53-4.498 3.654-7.674 1.99-5.627-2.95-22.002-18.826-27.199-26.372l-4.877-7.081-2.87 3.545c-4.172 5.154-4.65 8.487-2.732 19.075 1.93 10.66 2.15 26.644.59 42.953-.766 7.997-.6 12.861.607 17.896 1.445 6.022 1.407 7.347-.289 10.268-1.975 3.402-5.93 24.873-8.56 46.478-.795 6.531-2.985 21.499-4.866 33.261-2.848 17.81-3.953 22.095-6.607 25.625-9.165 12.191-19.709 42.07-19.709 55.85 0 8.566-15.846 33.299-27.148 42.375-12.638 10.147-29.043 27.048-30.48 31.4-1.736 5.262-.546 27.102 2.103 38.568 2.436 10.545 1.81 11.635-6.796 11.834-20.414.47-23.856.444-26.584-.207z'
        ></path>
        <path
          fill={fill}
          d='M289.33 637.024c-28.67-10.388-39.999-41.357-24.158-66.042 4.56-7.107 9.186-11.189 17.819-15.725 5.683-2.987 7.756-3.357 18.884-3.369 10.925-.01 13.39.404 19.56 3.297 21.86 10.249 31.622 37.872 20.847 58.992-5.554 10.887-21.354 23.323-29.63 23.323-1.378 0-2.852.563-3.277 1.25-1.294 2.094-12.06 1.167-20.045-1.726zm-153.228-23.587c-.082-.859-.03-6.957.115-13.551.198-9.055-.407-14.47-2.473-22.127-2.669-9.892-2.682-10.298-.544-16.76 1.717-5.189 4.18-8.584 11.37-15.671 5.05-4.976 9.18-9.937 9.18-11.025 0-1.088 1.608-4.329 3.574-7.203 6.756-9.877 7.625-12.394 6.304-18.271-.663-2.952-.837-6.567-.388-8.035 1.21-3.948 10.779-16.949 16.642-22.61 4.324-4.175 5.12-5.726 5.133-10 .008-2.783 1.126-9.559 2.485-15.059 2.49-10.08 2.978-20.995 1.453-32.49-.758-5.715-1.144-6.295-4.578-6.885-3.638-.624-3.782-.915-4.806-9.697-.58-4.979-1.565-9.053-2.187-9.053-.623 0-1.132.52-1.132 1.154 0 .635-2.042 3.83-4.538 7.1-2.932 3.84-5.158 8.632-6.289 13.533-.962 4.174-4.218 11.856-7.235 17.072-3.017 5.217-6.996 13.092-8.842 17.5-1.846 4.409-3.856 8.63-4.466 9.382-3.693 4.546-8.652 20.32-9.337 29.698-.873 11.961-.994 12.347-11.53 37.061-2.784 6.531-6.027 15.813-7.206 20.625-1.179 4.813-2.555 9.875-3.058 11.25-.503 1.375-1.42 4.17-2.036 6.211-1.285 4.255-8.17 9.414-12.563 9.414-5.353 0-11.422-3.459-14.632-8.34-3.529-5.364-6.368-19.834-5.06-25.789.982-4.471 23.428-48.57 27.595-54.213 2.265-3.069 3.238-6.752 4.292-16.25.749-6.756 2.194-19.314 3.21-27.908a4806.464 4806.464 0 003.166-27.5c1.595-14.362 4.496-21.04 12.725-29.295l6.15-6.17-1.47-7.984a39.22 39.22 0 00-5.946-14.723c-5.895-8.879-8.955-19.794-11.724-41.828-3.728-29.664-3.588-31.187 4.018-43.713 3.561-5.864 8.624-13.271 11.25-16.46 4.52-5.487 4.776-6.265 4.776-14.48 0-4.774.4-9.081.89-9.571 1.483-1.482 5.358-12.475 5.359-15.2 0-1.403 2.283-10.121 5.072-19.375 8.547-28.36 8.451-26.698 2.342-40.629-4.02-9.164-6.941-13.75-12.281-19.274l-7.007-7.249-13.338-.807c-7.964-.483-16.192-1.79-20.423-3.246-6.286-2.162-7.55-2.243-11.211-.713-2.27.948-6.298 3.652-8.952 6.007-2.655 2.356-12.139 8.388-21.076 13.404-8.938 5.016-16.531 9.504-16.875 9.974-3.018 4.12-20.691 18.832-22.624 18.832-3.86 0-12.12-4.698-14.413-8.197-1.393-2.126-2.1-5.964-2.152-11.686l-.078-8.52 7.974-7.708c5.457-5.273 8.38-7.301 9.26-6.423.705.706 2.361 1.284 3.679 1.284 1.78 0 2.228.642 1.742 2.5-1.22 4.665 1.926 2.526 14.594-9.928 15.582-15.317 15.829-15.502 32.324-24.243C85.982 91.27 96.484 88.75 115.432 88.75c10.597 0 12.832-.374 16.09-2.693 3.594-2.56 4.27-2.618 13.642-1.184 5.423.83 10.338 1.214 10.922.854 1.16-.718 38.46-1.182 41.353-.514 2.927.675 2.994-3.966.102-7.045-3.284-3.496-6.034-19.282-3.618-20.775.811-.501 2.178-.642 3.036-.313 1.123.431 1.813-2.144 2.461-9.178.495-5.377 1.992-12.118 3.326-14.979 4.454-9.553 19.1-16.671 34.299-16.672l8.92-.001 6.967 6.562c8.728 8.223 10.862 13.3 11.353 27.013.408 11.408-1.397 21.636-5.586 31.657-1.347 3.22-2.449 6.385-2.449 7.032 0 1.049 16.46 10.549 32.927 19.004 7.585 3.894 21.506 18.45 24.642 25.767 3.776 8.81 5.1 19.767 3.905 32.34-.712 7.5-.557 16.042.465 25.625 2.136 20.027 2.178 61.705.068 66.741-2.61 6.227-8.133 12.009-11.472 12.009-3.952 0-23.558-17.571-29.93-26.823-2.624-3.81-5.099-6.926-5.5-6.925-.402.001-2.228 2.392-4.06 5.313l-3.33 5.31 1.855 10c1.432 7.725 1.68 15.475 1.092 34.063-.528 16.653-.318 25.547.682 28.882 1.18 3.94 1.092 5.596-.482 9.063-2.459 5.416-7.907 34.947-8.853 47.992-.399 5.5-2.415 20.083-4.48 32.407-2.81 16.765-4.364 23.06-6.172 25-3.559 3.82-13.618 24.664-15.569 32.262-1.597 6.22-3.694 17.308-5.169 27.331-.915 6.219-13.558 26.274-21.901 34.74-3.8 3.856-12.595 11.932-19.546 17.949-6.95 6.016-13.512 12.78-14.58 15.032-3.057 6.44-2.194 32.159 1.486 44.287.67 2.205.916 5.158.548 6.563-.633 2.423-1.591 2.554-18.647 2.554-13.47 0-18.016-.392-18.127-1.563z'
        ></path>
        <path
          fill={fill}
          d='M295.563 638.983c-.654-.56-4.54-2.031-8.638-3.272-10.095-3.055-21.449-14.157-25.655-25.086-11.017-28.622 9.904-59.375 40.392-59.375 25.404 0 44.618 18.738 44.784 43.673.1 14.925-8.115 29.572-20.73 36.965-10.524 6.167-26.773 9.99-30.153 7.095zM135.88 613.339c-.35-.913-.118-4.429.517-7.812 1.332-7.103.73-13.122-2.827-28.24l-2.55-10.836 3.41-7.598c2.205-4.916 5.444-9.387 9.177-12.669 9.754-8.577 10.113-9 11.322-13.378.645-2.338 2.532-6.036 4.192-8.216 4.18-5.488 5.173-9.087 4.766-17.258-.443-8.9 1.326-12.39 12.258-24.18 8.385-9.044 8.478-9.221 9.254-17.706.432-4.714 1.619-10.821 2.638-13.571 1.946-5.25 2.502-20.334 1.16-31.496-.74-6.16-.98-6.515-4.676-6.875-3.844-.374-3.909-.495-4.853-9.044-.957-8.672-2-11.52-3.092-8.45-.32.899-2.69 4.069-5.265 7.044-3.325 3.842-4.904 7.026-5.446 10.987-.463 3.377-5.426 14.895-12.585 29.205-15.342 30.67-16.796 34.554-18.088 48.331-.64 6.825-2.126 13.849-3.633 17.173-6.758 14.906-16.495 41.972-16.532 45.954-.015 1.557-.523 3.807-1.13 5-.607 1.194-1.598 3.841-2.204 5.882-.607 2.046-3.042 5.02-5.425 6.626-3.491 2.352-5.294 2.758-9.359 2.106-7.4-1.188-10.527-3.727-14.04-11.399-2.356-5.149-3.177-9.113-3.276-15.832-.13-8.805.02-9.246 8.587-25.212 4.796-8.937 9.741-18.5 10.99-21.25 1.25-2.75 4.415-8.375 7.037-12.5 4.649-7.317 4.8-7.928 6.197-25 .787-9.625 2.221-23.125 3.186-30 .965-6.875 2.12-16.156 2.568-20.625 1.073-10.74 5.344-19.887 12.556-26.897l5.886-5.72-1.34-8.086c-.975-5.886-2.723-10.203-6.425-15.868-2.797-4.281-5.416-9.757-5.821-12.169-.406-2.412-1.516-6.635-2.47-9.385-1.81-5.229-5.544-36.72-5.544-46.775 0-4.8 1.085-7.58 6.154-15.776 3.385-5.472 8.448-12.733 11.25-16.136 4.73-5.743 5.096-6.735 5.096-13.825 0-5.188 1.003-10.197 3.125-15.613 1.719-4.386 3.125-9.218 3.125-10.739 0-1.52 2.206-9.836 4.903-18.48 8.75-28.045 8.7-27.4 3.124-40.854-3.881-9.363-6.266-13.101-12.356-19.366l-7.546-7.764-12.5-.775c-6.875-.427-16.098-1.874-20.495-3.215-9.355-2.853-12.234-2.123-21.157 5.363-2.971 2.492-11.904 8.058-19.852 12.368-10.1 5.477-17.27 10.472-23.814 16.587-5.15 4.813-11.003 9.803-13.006 11.09-3.48 2.234-3.893 2.244-9.209.214-7.046-2.691-10.05-6.515-11.052-14.075-1.162-8.759.62-13.06 8.583-20.71 7.054-6.779 7.143-6.82 10.828-4.982 2.386 1.191 3.464 2.506 3.015 3.678-1.73 4.508 5.224-.642 17.761-13.156 11.847-11.823 15.064-14.252 27.788-20.98 16.803-8.883 28.034-11.704 46.6-11.704 9.956 0 12.751-.448 16.464-2.638 3.68-2.171 5.518-2.474 10.383-1.71 3.252.51 17.444.86 31.538.78 22.418-.13 25.678-.4 26.05-2.152.235-1.102-.782-3.29-2.26-4.862-3.283-3.496-6.033-19.282-3.617-20.775.811-.501 2.16-.649 2.998-.328 1.057.406 1.787-2.014 2.39-7.928 1.357-13.293 3.042-17.545 9.052-22.835 7.111-6.26 15.016-9.067 27.317-9.702l10.055-.52 7.629 7.489c8.829 8.666 10.553 12.809 10.915 26.235.253 9.395-2.912 27.62-5.316 30.61-.646.804-1.549 3.214-2.006 5.356-.821 3.845-.675 3.984 11.418 10.787 6.737 3.791 15.518 8.474 19.512 10.407 8.643 4.183 21.384 17.074 25.923 26.23 2.943 5.936 3.074 7.262 3.3 33.42.128 14.98.787 30.168 1.463 33.75 1.885 9.99 1.645 52.946-.322 57.641-2.538 6.056-8.138 11.995-11.31 11.995-3.966 0-22.582-16.617-29.222-26.082-2.958-4.217-5.852-7.668-6.43-7.668-.578 0-2.496 2.466-4.262 5.48l-3.211 5.478 1.84 10.459c2.206 12.533 2.406 33.944.389 41.487-1.123 4.199-1.1 7.27.097 13.456 1.975 10.194 2.054 14.334.338 17.768-1.881 3.765-7.73 34.477-7.73 40.588 0 10.003-8.61 60.84-10.543 62.253-2.743 2.007-13.952 25.077-16.048 33.031-3.645 13.83-4.659 18.878-4.659 23.183 0 2.419-.811 6.338-1.802 8.71-3.494 8.363-18.335 29.346-24.058 34.015-13.03 10.63-29.4 25.968-30.984 29.033-2.247 4.345-2.635 21.046-.74 31.934.836 4.813 1.83 11.703 2.207 15.313l.687 6.562h-18.146c-13.938 0-18.294-.385-18.784-1.66z'
        ></path>
        <path
          fill={fill}
          d='M295.625 638.75c-.425-.688-1.724-1.256-2.886-1.262-3.797-.022-14.848-5.89-20.203-10.73-12.265-11.08-17.181-31.524-11.319-47.066 5.775-15.311 20.807-26.669 37.105-28.035 35.694-2.993 59.425 33.146 42.3 64.417-5.691 10.394-16.783 18.873-27.256 20.838-2.554.48-4.952 1.37-5.329 1.98-.941 1.523-11.457 1.403-12.412-.142zm-158.321-24.688c-.108-.515-.308-6.843-.444-14.062-.162-8.577-1.148-16.542-2.846-22.987-2.59-9.832-2.59-9.883-.16-16.377 2.412-6.448 8.501-13.927 15.274-18.761 1.926-1.375 4.271-4.766 5.21-7.536.94-2.77 3.7-7.996 6.134-11.612 4.226-6.279 4.391-6.933 3.681-14.54-.897-9.605.701-12.734 13.635-26.699 8.432-9.104 8.462-9.163 8.462-16.405 0-3.998.857-9.698 1.904-12.666 2.184-6.189 2.757-19.484 1.33-30.854-.798-6.363-1.402-7.813-3.255-7.813-5.01 0-6.226-1.395-6.377-7.321-.081-3.192-.521-7.491-.978-9.554l-.83-3.75-2.372 3.75c-1.305 2.063-3.894 5.438-5.754 7.5-2.155 2.39-3.678 5.841-4.2 9.517-.737 5.186-6.18 17.825-11.244 26.108-1.05 1.719-5.628 11.197-10.173 21.063-7.317 15.885-8.335 19.033-8.892 27.5-.82 12.47-1.52 14.855-10.332 35.187-5.178 11.949-10.034 27.15-10.058 31.489-.01 1.85-.582 3.711-1.269 4.136-.688.425-1.25 2.063-1.25 3.641 0 3.33-4.871 9.037-9.015 10.563-5.633 2.074-11.902.218-16.518-4.892-7.423-8.216-9.83-24.86-4.962-34.312 14.002-27.184 23.915-45.646 26.178-48.75 2.254-3.093 2.988-6.708 4.19-20.625.802-9.281 2.57-25.313 3.931-35.625 1.36-10.313 2.778-21.107 3.15-23.988.797-6.171 7.897-17.555 13.14-21.068 2.802-1.876 3.65-3.404 3.652-6.578.006-6.98-2.67-15.248-7.035-21.735-2.291-3.404-4.802-8.54-5.58-11.41a418.388 418.388 0 00-3.138-10.846c-1.653-5.391-5.493-38.02-5.493-46.666 0-4.78 11.492-24.963 18.299-32.137 3.894-4.104 4.201-5.029 4.201-12.653 0-5.76.818-10.054 2.728-14.323 1.5-3.353 3.402-9.471 4.227-13.596.825-4.125 3.816-15.32 6.647-24.876 2.832-9.557 5.148-18.74 5.148-20.408 0-1.668-2.076-7.865-4.613-13.77-3.358-7.818-6.556-12.815-11.757-18.375l-7.144-7.637-14.805-1.442c-8.143-.793-17.318-2.343-20.389-3.445-7.173-2.572-11.09-1.64-17.77 4.234-2.969 2.61-12.71 8.826-21.647 13.813-11.6 6.473-18.754 11.471-25 17.466-12.367 11.87-14.21 12.922-19.48 11.116-5.739-1.968-9.513-4.506-10.504-7.063-3.88-10.014-2.472-21.7 2.962-24.578 1.8-.953 4.397-3.469 5.772-5.59 2.153-3.324 3.02-3.749 6.25-3.067 5.042 1.064 5.635 1.515 4.812 3.662-1.98 5.158 4.74.48 16.793-11.693 12.258-12.379 14.731-14.233 29.129-21.837 13.678-7.223 17.271-8.558 27.5-10.217 6.471-1.05 16.2-1.91 21.618-1.913 7.905-.004 10.716-.538 14.217-2.702 3.939-2.435 4.926-2.554 10.147-1.227 3.76.956 14.86 1.353 31.715 1.135 23.959-.31 25.932-.506 25.938-2.574.004-1.231-1.155-3.808-2.573-5.727-2.461-3.328-5.32-17.116-4.008-19.331.34-.576 1.68-.77 2.978-.43 1.297.34 2.363.248 2.368-.204.072-6.194 2.82-22.205 4.304-25.074 4.437-8.581 20.492-16.371 33.74-16.371 7.724 0 8.397.25 14.334 5.313 9.477 8.081 12.497 15.166 12.658 29.687.13 11.645-1.261 19.34-5.627 31.13-1.12 3.027-1.774 6.192-1.452 7.032.574 1.495 15.868 10.267 29.534 16.94 8.774 4.283 22.742 18.342 27.223 27.398 3.385 6.84 3.402 7.014 3.46 34.394.03 15.135.536 28.294 1.122 29.242 1.532 2.479 1.952 52.274.492 58.318-1.43 5.925-8.557 14.296-12.169 14.296-2.972 0-23.13-18.818-29.602-27.635-2.469-3.363-4.904-6.115-5.41-6.115-.507 0-2.483 2.384-4.39 5.298l-3.47 5.298 2.135 12.514c2.084 12.22 2.052 27.432-.09 43.323-.445 3.307-.076 8.958.858 13.125 1.701 7.589 1.654 12.626-.139 14.802-1.443 1.752-7.117 32.98-8.065 44.39-.66 7.937-1.993 17.024-7.63 52.027-.345 2.146-1.795 5.24-3.222 6.875-5.334 6.116-14.776 27.77-17.336 39.76-1.385 6.483-2.523 13.514-2.53 15.625-.016 5.318-4.785 15.044-13.908 28.363-5.8 8.468-10.115 13.116-17.222 18.549-12.177 9.309-25.958 23.65-27.1 28.203-1.467 5.84-1.238 19.364.496 29.348.895 5.156 1.943 11.68 2.328 14.498l.701 5.123-5.94.815c-8.148 1.117-29.297 1.028-29.538-.124z'
        ></path>
      </g>
    </svg>
  );
};

export default PlayerSVG2;
