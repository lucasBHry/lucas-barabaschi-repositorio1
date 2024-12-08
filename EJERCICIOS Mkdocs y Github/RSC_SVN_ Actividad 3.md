## RSC/SVN. Actividad 3. Diferencias entre los SCV locales y centralizados

Los sistemas de control de versiones (SCV) locales y centralizados tienen diferencias clave que afectan la forma en que se gestionan los cambios en el código. A continuación se describen estas diferencias:

1. **Estructura de almacenamiento**:
   - **SCV Locales**: En los SCV locales, como Git, cada desarrollador mantiene una copia completa del repositorio en su propia máquina. Esto incluye todo el historial de versiones, lo que permite trabajar de manera autónoma sin necesidad de acceso constante a un servidor central.
   - **SCV Centralizados**: En los SCV centralizados, como SVN (Subversion), el repositorio principal se encuentra en un servidor centralizado, y los desarrolladores obtienen una copia local solo del código fuente actual. El historial completo de versiones está disponible solo en el servidor central.

2. **Acceso y sincronización**:
   - **SCV Locales**: Los desarrolladores pueden trabajar de manera independiente y realizar cambios sin conexión. La sincronización con otros desarrolladores solo ocurre cuando se realiza un "push" (subida de cambios) al repositorio central, lo que les permite mantener un control completo sobre su trabajo local.
   - **SCV Centralizados**: Los desarrolladores deben estar conectados al servidor para realizar cualquier operación, como "commit" (guardar cambios) o "update" (actualizar la copia local con los últimos cambios). Esto requiere una conexión constante con el repositorio central y puede generar bloqueos si hay conflictos.

3. **Rendimiento y dependencias**:
   - **SCV Locales**: Al tener una copia completa del repositorio, los SCV locales permiten realizar la mayoría de las operaciones de manera rápida y sin necesidad de una conexión constante con el servidor. Esto mejora el rendimiento, especialmente cuando se trabaja en proyectos grandes.
   - **SCV Centralizados**: Las operaciones, como las actualizaciones y los commits, dependen de la disponibilidad del servidor central. Si el servidor no está disponible o tiene problemas de rendimiento, los desarrolladores no podrán realizar tareas cruciales, lo que puede ralentizar el flujo de trabajo.

4. **Trabajo sin conexión**:
   - **SCV Locales**: Los desarrolladores pueden trabajar sin conexión a la red, ya que todas las versiones y cambios están disponibles localmente. Pueden realizar commits, ramas y otros cambios sin conexión y luego sincronizarlos cuando se conecten al servidor central.
   - **SCV Centralizados**: Requieren conexión constante al servidor para acceder a las versiones y realizar commits. Si no hay acceso a la red, no es posible realizar ciertas operaciones, lo que limita la flexibilidad del trabajo sin conexión.

5. **Gestión de ramas**:
   - **SCV Locales**: Los SCV locales facilitan la creación y gestión de ramas (branches) debido a que cada desarrollador puede crear múltiples ramas sin afectar al repositorio central hasta que decida fusionarlas. Esto favorece la experimentación y el trabajo paralelo.
   - **SCV Centralizados**: La gestión de ramas es más difícil y costosa, ya que requiere una buena coordinación entre los desarrolladores para evitar conflictos. Aunque es posible crear ramas, el proceso es más dependiente de las políticas del servidor central.

6. **Control de acceso**:
   - **SCV Locales**: Los SCV locales permiten un control de acceso menos restrictivo, ya que cada desarrollador tiene su propio repositorio. Las políticas de acceso y control suelen gestionarse en el servidor central, pero no son tan restrictivas a nivel local.
   - **SCV Centralizados**: En los SCV centralizados, el acceso al repositorio y a las operaciones de commit, update o checkout está estrictamente gestionado por el servidor central. Esto facilita un control más riguroso sobre quién puede realizar cambios y cómo se gestionan esos cambios.

En resumen, la principal diferencia entre los SCV locales y centralizados radica en la estructura de almacenamiento, la independencia del trabajo sin conexión, el rendimiento y la flexibilidad en la gestión de ramas. Los SCV locales proporcionan mayor autonomía y velocidad, mientras que los SCV centralizados ofrecen un control más estricto sobre el código y las versiones.
