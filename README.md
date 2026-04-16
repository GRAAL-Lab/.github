![Proof HTML](https://github.com/GRAAL-Lab/demo-repository/actions/workflows/proof-html.yml/badge.svg)

# GRAAL Lab. – Repositories Website

This repository contains a minimal static webpage used as a landing hub for the GRAAL Laboratory GitHub organization.

Link: https://graal-lab.github.io/.github/.

## Contributing Guidelines

These guidelines apply to all repositories under the **GRAAL Lab** GitHub organization.

### Repository Naming

* Use **lowercase** names with underscores (`snake_case`) for multi-word repositories (e.g., `ctrl_toolbox`, `isaac_sim_underwater`).
* Use **short lowercase acronyms** for single-concept libraries (e.g., `rml`, `tpik`, `ikcl`).
* Avoid capital letters, hyphens, or special characters in repository names.
* Always assign relevant [topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) (e.g., `graal-robotics-toolbox`, `unige`) to improve discoverability.

### Branch Naming

All repositories use `main` as the default, production-ready branch. **Never push directly to `main`.**

When contributing, create a dedicated branch using the following conventions:

| Purpose | Pattern | Example |
|---|---|---|
| New feature | `feature/<short-description>` | `feature/add-svd-solver` |
| Bug fix | `bugfix/<short-description>` | `bugfix/fix-jacobian-overflow` |
| Urgent hotfix | `hotfix/<short-description>` | `hotfix/segfault-on-init` |
| Documentation | `docs/<short-description>` | `docs/update-readme` |
| Refactoring | `refactor/<short-description>` | `refactor/rename-arm-model` |

Use **lowercase letters and hyphens only** in branch names (no underscores or spaces).

### Pull Requests

* Always open a pull request (PR) to merge into `main`.
* Use a clear, descriptive title written in the **imperative mood** (e.g., *"Add SVD regularization parameter"*, not *"Added SVD"*).
* The PR description must include:
  * **What** the change does.
  * **Why** the change is needed.
  * Any related issue numbers (e.g., `Closes #12`).
* Request at least **one review** from a lab member before merging.
* Ensure all **CI checks pass** before merging.
* Keep the commit history clean: squash fixup commits and preserve only meaningful history.

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <short summary>
```

Common types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`.

Examples:

```
feat(solver): add joint velocity saturation support
fix(jacobian): correct index out-of-bounds in arm model
docs(readme): add usage example for ActionManager
```

### Code Style

* Follow the language-specific conventions already established within each repository.
* For **C++** repositories: respect the existing namespace structure, class naming, and Doxygen doc-comment style.
* For **Python** repositories: follow [PEP 8](https://pep8.org/) and include docstrings for public functions and classes.
* Run any available CI or linting checks locally before opening a PR.

